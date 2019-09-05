import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/domain/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
  @Input() place: Place;
  error: string = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlacesService
    ) { }

  ngOnInit() {
    const placeId = this.route.snapshot.paramMap.get('id');
    if (placeId) {
      this.placeService.getById(placeId).subscribe(
        d => this.loadPlace(d),
        e => this.handleError(e)
      );
    }
  }

  loadPlace(place: Place): void {
    this.place = place;
    this.error = null;
  }

  handleError(e: any) {
    this.error = e.message;
    this.place = null;
  }

  back() {
    this.router.navigate(['/page3']);
  }

}
