// This import enable module augmentation instead of module overwrite
import 'quasar';
import { StringDictionary } from './utils';

declare module 'quasar' {
  // TODO: these are all languages currently available
  // This could be changed to ISO codes reference directly,
  //  throwing error if the specified language could not be found.
  // Otherwise it could use declaration merging and make QuasarLanguage an enum
  //  into which every language file its same language code.
  // Language files should also be typed using `lang.ts` interfaces
  // This can also be generated from lang files names, being then used to reference them
  type QuasarLanguageCodes =
    | 'ar'
    | 'bg'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en-gb'
    | 'en-us'
    | 'eo'
    | 'es'
    | 'fa-ir'
    | 'fi'
    | 'fr'
    | 'gn'
    | 'he'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'km'
    | 'ko-kr'
    | 'lu'
    | 'lv'
    | 'ml'
    | 'ms'
    | 'nb-no'
    | 'nl'
    | 'pl'
    | 'pt-br'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sr'
    | 'sv'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-hans'
    | 'zh-hant';

  type QuasarLanguageGeneralLabel =
    | 'clear'
    | 'ok'
    | 'cancel'
    | 'close'
    | 'set'
    | 'select'
    | 'reset'
    | 'remove'
    | 'update'
    | 'create'
    | 'search'
    | 'filter'
    | 'refresh';
  type QuasarLanguageTableLabel =
    | 'noData'
    | 'noResults'
    | 'loading'
    | 'recordsPerPage'
    | 'allRows'
    | 'columns';
  type QuasarLanguageEditorLabel =
    | 'url'
    | 'bold'
    | 'italic'
    | 'strikethrough'
    | 'underline'
    | 'unorderedList'
    | 'orderedList'
    | 'subscript'
    | 'superscript'
    | 'hyperlink'
    | 'toggleFullscreen'
    | 'quote'
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
    | 'print'
    | 'outdent'
    | 'indent'
    | 'removeFormat'
    | 'formatting'
    | 'fontSize'
    | 'align'
    | 'hr'
    | 'undo'
    | 'redo'
    | 'header1'
    | 'header2'
    | 'header3'
    | 'header4'
    | 'header5'
    | 'header6'
    | 'paragraph'
    | 'code'
    | 'size1'
    | 'size2'
    | 'size3'
    | 'size4'
    | 'size5'
    | 'size6'
    | 'size7'
    | 'defaultFont';

  type QuasarLanguageTreeLabel = 'noNodes' | 'noResults';
  type QuasarLanguageDayTuple = [
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  type QuasarLanguageMonthTuple = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];

  interface QuasarLanguage {
    isoName: string;
    nativeName: string;
    rtl?: boolean;
    label: StringDictionary<QuasarLanguageGeneralLabel>;
    date: {
      days: QuasarLanguageDayTuple;
      daysShort: QuasarLanguageDayTuple;
      months: QuasarLanguageMonthTuple;
      monthsShort: QuasarLanguageMonthTuple;
      firstDayOfWeek: number;
      format24h: boolean;
      // Could not understand what exactly 'model' is, modeled after its usage
      headerTitle?: (
        date: Date,
        model: { year: number; month: number; day: number }
      ) => string;
    };
    table: StringDictionary<QuasarLanguageTableLabel> & {
      selectedRecords: (rows: number) => string;
      pagination: (start: number, end: number, total: number) => string;
    };
    editor: StringDictionary<QuasarLanguageEditorLabel>;
    tree: StringDictionary<QuasarLanguageTreeLabel>;
  }
}
