```

import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  let fixture: AppComponent;

  let mockService: any;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    mockService = {

      search: jest.fn().mockReturnValue(of({
        "batchcomplete": "",
        "continue": {
            "sroffset": 10,
            "continue": "-||"
        },
        "query": {
            "searchinfo": {
                "totalhits": 388429,
                "suggestion": "since",
                "suggestionsnippet": "since"
            },
            "search": [
                {
                    "ns": 0,
                    "title": "Space",
                    "pageid": 27667,
                    "size": 36133,
                    "wordcount": 4437,
                    "snippet": "<span class=\"searchmatch\">Space</span> is a three-dimensional continuum containing positions and directions. In classical physics, physical <span class=\"searchmatch\">space</span> is often conceived in three linear dimensions",
                    "timestamp": "2024-05-31T12:52:05Z"
                },
                {
                    "ns": 0,
                    "title": "Space (disambiguation)",
                    "pageid": 2061420,
                    "size": 7179,
                    "wordcount": 832,
                    "snippet": "Look up <span class=\"searchmatch\">space</span> in Wiktionary, the free dictionary. <span class=\"searchmatch\">Space</span> is the boundless three-dimensional extent in which objects and events have relative position and",
                    "timestamp": "2023-11-13T04:13:10Z"
                },
                {
                    "ns": 0,
                    "title": "SpaceX",
                    "pageid": 832774,
                    "size": 209331,
                    "wordcount": 16687,
                    "snippet": "<span class=\"searchmatch\">Space</span> Exploration Technologies Corporation, commonly referred to as <span class=\"searchmatch\">Space</span>X, is an American spacecraft manufacturer, launch service provider and satellite",
                    "timestamp": "2024-06-14T08:53:11Z"
                },
                {
                    "ns": 0,
                    "title": "NASA",
                    "pageid": 18426568,
                    "size": 229387,
                    "wordcount": 20819,
                    "snippet": "Aeronautics and <span class=\"searchmatch\">Space</span> Administration (NASA; /ˈnæsə/) is an independent agency of the U.S. federal government responsible for the civil <span class=\"searchmatch\">space</span> program, aeronautics",
                    "timestamp": "2024-06-11T15:54:15Z"
                },
                {
                    "ns": 0,
                    "title": "Space Shuttle",
                    "pageid": 28189,
                    "size": 111986,
                    "wordcount": 12119,
                    "snippet": "National Aeronautics and <span class=\"searchmatch\">Space</span> Administration (NASA) as part of the <span class=\"searchmatch\">Space</span> Shuttle program. Its official program name was <span class=\"searchmatch\">Space</span> Transportation System (STS)",
                    "timestamp": "2024-06-09T10:06:55Z"
                },
                {
                    "ns": 0,
                    "title": "Outer space",
                    "pageid": 177602,
                    "size": 137964,
                    "wordcount": 13319,
                    "snippet": "Outer <span class=\"searchmatch\">space</span> (or simply <span class=\"searchmatch\">space</span>) is the expanse beyond celestial bodies and their atmospheres. It contains ultra-low levels of particle densities, constituting",
                    "timestamp": "2024-06-15T01:22:45Z"
                },
                {
                    "ns": 0,
                    "title": "User space and kernel space",
                    "pageid": 93467,
                    "size": 4660,
                    "wordcount": 498,
                    "snippet": "usually uses virtual memory to provide separate address <span class=\"searchmatch\">spaces</span> called user <span class=\"searchmatch\">space</span> and kernel <span class=\"searchmatch\">space</span>. Primarily, this separation serves to provide memory protection",
                    "timestamp": "2024-01-19T16:53:25Z"
                },
                {
                    "ns": 0,
                    "title": "International Space Station",
                    "pageid": 15043,
                    "size": 373617,
                    "wordcount": 32345,
                    "snippet": "International <span class=\"searchmatch\">Space</span> Station (ISS) is a large <span class=\"searchmatch\">space</span> station assembled and maintained in low Earth orbit by a collaboration of five <span class=\"searchmatch\">space</span> agencies and their",
                    "timestamp": "2024-06-12T17:05:54Z"
                },
                {
                    "ns": 0,
                    "title": "Spaced",
                    "pageid": 147651,
                    "size": 29777,
                    "wordcount": 2095,
                    "snippet": "<span class=\"searchmatch\">Spaced</span> is a British television sitcom created, written by and starring Simon Pegg and Jessica Stevenson, and directed by Edgar Wright, about the comedic",
                    "timestamp": "2024-06-02T20:26:09Z"
                },
                {
                    "ns": 0,
                    "title": "Space Race",
                    "pageid": 84237,
                    "size": 146441,
                    "wordcount": 17837,
                    "snippet": "The <span class=\"searchmatch\">Space</span> Race was a 20th-century competition between two Cold War rivals, the United States and the Soviet Union, to achieve superior spaceflight capability",
                    "timestamp": "2024-05-31T04:13:23Z"
                }
            ]
        }
    }))
    }
    fixture = new AppComponent(mockService)
  })

  describe('setup', () => {
    describe('ngOnInit', () => {

      it('should', () => {
        fixture.onTerm('teste')
      })
    })
  })

});

```
