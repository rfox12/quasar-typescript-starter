import { StringDictionary } from './utils';

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

export interface QuasarLanguage {
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
      model: { year: number; month: number; day: number },
    ) => string;
  };
  table: StringDictionary<QuasarLanguageTableLabel> & {
    selectedRecords: (rows: number) => string;
    pagination: (start: number, end: number, total: number) => string;
  };
  editor: StringDictionary<QuasarLanguageEditorLabel>;
  tree: StringDictionary<QuasarLanguageTreeLabel>;
}
