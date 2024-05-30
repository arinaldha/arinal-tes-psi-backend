import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ManipulateService {
  constructor(private readonly httpService: HttpService) {}

  getRandomUsers(): Observable<any> {
    const url = 'https://randomuser.me/api?results=10&page=1';
    return this.httpService.get(url).pipe(
      map((response) => {
        const rows = response.data.results;
        const newFormat = rows.map((row) => ({
          name: `${row.name.title} ${row.name.first} ${row.name.last}`,
          location: `${row.location.street.number} ${row.location.street.name}, ${row.location.city}, ${row.location.state}, ${row.location.country}`,
          email: row.email,
          age: row.dob.age,
          phone: row.phone,
          cell: row.cell,
          picture: [
            row.picture.large,
            row.picture.medium,
            row.picture.thumbnail,
          ],
        }));
        return newFormat;
      }),
    );
  }
}
