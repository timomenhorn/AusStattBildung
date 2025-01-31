export class HomecomponentData {


  // tslint:disable-next-line:max-line-length
  get maindata(): ({ matCardtopic: string; matCardId: number; access: string[]; matCardLink: string; matCardContent: string; matCardSVG: string; matCardHeader: { matCardTitle: string; matCardSubtitle: string } } | { matCardId: number; matCardTopic: string; access: string[]; matCardLink: string; matCardContent: string; matCardSVG: string; matCardHeader: { matCardTitle: string; matCardSubtitle: string } } | { matCardId: number; matCardTopic: string; access: string[]; matCardLink: string; matCardContent: string; matCardSVG: string; matCardHeader: { matCardTitle: string; matCardSubtitle: string } })[] {
    return this._maindata;
  }

  get subdata(): {
    // tslint:disable-next-line:max-line-length
    '0': ({ SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string })[]; '1': ({ SVG: string; detailSymbol: string; link: string; viewValue: string; value: number } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: number } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: number } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: number } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: number } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: number } | { SVG: string; detailSymbol: string; link: string; viewValue: string; value: string })[]
  }[] {
    return this._subdata;
  }

  private _maindata = [
    {
      /*ID für eindeutige Bestimmung der Card*/
      'matCardId': 0,
      /*Thema der Material Card*/
      'matCardtopic': 'antraege',
      /*Headerinformationen der Material Card*/
      'matCardHeader': {
        /*Titel der Material Card*/
        'matCardTitle': 'Antrag erstellen',
        /*Unterüberschrift der Material Card*/
        'matCardSubtitle': '',
      },
      /*Icon Informationen*/
      // tslint:disable-next-line:max-line-length
      'matCardSVG': 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
      /*Body der Material Card*/
      'matCardContent': 'Benutzen Sie dieses Feld um einen neuen Antrag zu erstellen.',
      /*Router Link der Material Card*/
      'matCardLink': 'create',
      /*Berechtigte Nutzerrollen der Material Card*/
      'access': ['admin', 'mitarbeiter', 'bereichsleiter', 'leitung', 'erwleitung', 'bereichsleiter']
    },
    {
      'matCardId': 1,
      'matCardTopic': 'typen',
      'matCardHeader': {
        'matCardTitle': 'Gesamtübersicht',
        'matCardSubtitle': '',
      },
      // tslint:disable-next-line:max-line-length
      'matCardSVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
      'matCardContent': 'Hier gelangen sie zur Gesamtübersicht von allen gestellten Anträgen',
      'matCardLink': 'list',
      'access': ['admin', 'mitarbeiter', 'bereichsleiter', 'leitung', 'erwleitung', 'bereichsleiter']
    },
/*    {
      'matCardId': 1,
      'matCardTopic': 'typen',
      'matCardHeader': {
        'matCardTitle': '<matCardTitle>',
        'matCardSubtitle': '<matCardSubtitle>',
      },
      // tslint:disable-next-line:max-line-length
      'matCardSVG': '<matCardSVG>',
      'matCardContent': '<matCardContent>',
      'matCardLink': 'list',
      'access': ['admin', 'mitarbeiter', 'bereichsleiter', 'leitung', 'erwleitung', 'bereichsleiter']
    },*/
    {
      'matCardId': 3,
      'matCardTopic': 'typen',
      'matCardHeader': {
        'matCardTitle': 'Usermanagement',
        'matCardSubtitle': '',
      },
      // tslint:disable-next-line:max-line-length
      'matCardSVG': 'M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z',
      'matCardContent': 'Hier gelangen sie zum Usermanagement',
      'matCardLink': 'user',
      'access': ['admin']
    }/*,{
      'matCardId': 3,
      'matCardTopic': 'typen',
      'matCardHeader': {
        'matCardTitle': '<matCardTitle>',
        'matCardSubtitle': '<matCardSubtitle>',
      },
      // tslint:disable-next-line:max-line-length
      'matCardSVG': '',
      'matCardContent': '<matCardContent>',
      'matCardLink': 'user',
      'access': ['admin']
    }*/];

  private _subdata = [
    {
      0: [
        {
          'value': 'access',
          'viewValue': 'Microsoft Access',
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        },
        {
          'value': 'allgemein',
          'viewValue': 'Allgemein',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }, {
          'value': 'bo',
          'viewValue': 'Business Objects',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }, {
          'value': 'innovationsteam',
          'viewValue': 'Innovationsteam',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }, {
          'value': 'integral',
          'viewValue': 'INTEGRAL',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }, {
          'value': 'kommunikation',
          'viewValue': 'Kommunikation/Schulungen',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }, {
          'value': 'mainframe',
          'viewValue': 'Mainframe Development',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }, {
          'value': 'marketing',
          'viewValue': 'Marketing',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }, {
          'value': 'sharepoint',
          'viewValue': 'Sharepoint',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z',
          'link': 'form',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }
      ],
      1: [
        {
          'value': 0,
          'viewValue': 'Anfrage',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
          'link': 'list',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
        }, {
          'value': 1,
          'viewValue': 'Wartet auf Beauftragung',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
          'link': 'list',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
        }, {
          'value': 2,
          'viewValue': 'In Bearbeitung',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
          'link': 'list',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
        }, {
          'value': 3,
          'viewValue': 'In Abnahme',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
          'link': 'list',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
        },
        {
          'value': 4,
          'viewValue': 'Abgeschlossen',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
          'link': 'list',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
        }, {
          'value': 5,
          'viewValue': 'Zurückgestellt',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
          'link': 'list',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
        }, {
          'value': 'alle',
          'viewValue': 'Alle Anträge',
          // tslint:disable-next-line:max-line-length
          'SVG': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z',
          'link': 'list',
          // tslint:disable-next-line:max-line-length
          'detailSymbol': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
        }
      ]
    }
  ];
}
