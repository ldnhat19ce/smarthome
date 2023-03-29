import {Component, OnInit} from '@angular/core';
import {ITEMS_PER_PAGE} from "../../../config/pagination.constants";
import {ASC, DESC, SORT} from 'app/config/navigation.constants';
import {SpeechDataService} from "../service/speech-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {ISpeechData, SpeechData} from "../speech-data.model";
import {combineLatest} from "rxjs";
import {User} from "../../../admin/user-management/user-management.model";
import {SpeechDataDeleteDialogComponent} from "../delete/speech-data-delete-dialog.component";

@Component({
  selector: 'jhi-speech-data',
  templateUrl: './speech-data.component.html',
})
export class SpeechDataComponent implements OnInit {
  isLoading = false;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  speechData: SpeechData[] | null = null;

  constructor(private speechDataService: SpeechDataService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.handleNavigation()
  }

  trackIdentity(_index: number, item: User): string {
    return item.id!;
  }

  transition(): void {
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute.parent,
      queryParams: {
        page: this.page,
        sort: `${this.predicate},${this.ascending ? ASC : DESC}`,
      },
    });
  }

  private handleNavigation(): void {
    combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
      const page = params.get('page');
      this.page = +(page ?? 1);
      const sort = (params.get(SORT) ?? data['defaultSort']).split(',');
      this.predicate = sort[0];
      this.ascending = sort[1] === ASC;
      this.loadAll();
    });
  }

  loadAll(): void {
    this.isLoading = true;
    this.speechDataService.query({
      page: this.page - 1,
      size: this.itemsPerPage,
      sort: this.sort(),
    }).subscribe({
      next: (res: HttpResponse<ISpeechData[]>) => {
        this.isLoading = false;
        this.onSuccess(res.body, res.headers);
      },
      error: () => (this.isLoading = false),
    })
  }

  private onSuccess(speechData: SpeechData[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.speechData = speechData;
    console.log(speechData)
  }

  private sort(): string[] {
    const result = [`${this.predicate},${this.ascending ? ASC : DESC}`];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  deleteSpeechData(speechData: SpeechData): void {
    const modalRef = this.modalService.open(SpeechDataDeleteDialogComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.speechData = speechData;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
