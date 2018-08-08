import {InMemoryDbService} from 'angular-in-memory-web-api';
export class ApiData implements InMemoryDbService{
    createDb() {
        let bookDetails = [
            {id:1,name:'php by manoj',category:'PHP',year:1987},
            {id:1,name:'php by manoj',category:'PHP',year:1987},
            {id:1,name:'php by manoj',category:'PHP',year:1987},
            {id:1,name:'php by manoj',category:'PHP',year:1987}
        ];
        let writerDetails = {
                writerId : 1,
                writerName: 'Alex',
                writerBooks : [
                    {id:1,name:'php by manoj',category:'PHP',year:1987},
                    {id:1,name:'php by manoj',category:'PHP',year:1987}
                ]
        }; 
        let welcomeMsg = 'Welcome to Angular world!';
        return {books:bookDetails,msg:welcomeMsg,writer:writerDetails};
    }
}
