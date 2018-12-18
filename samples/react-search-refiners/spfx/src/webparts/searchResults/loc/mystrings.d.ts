declare interface ISearchResultsWebPartStrings {
    SearchQuerySettingsGroupName: string;
    SearchSettingsGroupName: string;
    SearchQueryKeywordsFieldLabel: string;
    SearchQueryKeywordsFieldDescription: string;
    QueryTemplateFieldLabel: string;
    SelectedPropertiesFieldLabel: string;
    SelectedPropertiesFieldDescription: string;
    LoadingMessage: string;
    MaxResultsCount: string;
    NoResultMessage: string;
    SortableFieldsLabel: string;
    SortableFieldsDescription: string;
    FilterPanelTitle: string;
    FilterResultsButtonLabel: string;
    SelectedFiltersLabel: string;
    RemoveAllFiltersLabel: string;
    ShowPagingLabel: string;
    ShowResultsCountLabel: string;
    ShowBlankLabel: string;
    ShowBlankEditInfoMessage: string;
    NoFilterConfiguredLabel: string;
    SearchQueryPlaceHolderText: string;
    EmptyFieldErrorMessage: string;
    PlaceHolderEditLabel: string;
    PlaceHolderConfigureBtnLabel: string;
    PlaceHolderIconText: string;
    PlaceHolderDescription: string;
    ResultSourceIdLabel: string;
    InvalidResultSourceIdMessage: string;
    EnableQueryRulesLabel: string;
    StylingSettingsGroupName: string;
    CountMessageShort: string;
    CountMessageLong: string;
    CancelButtonText: string;
    DialogButtonLabel: string;
    DialogButtonText: string;
    DialogTitle: string;
    SaveButtonText: string;
    ListLayoutOption: string;
    TilesLayoutOption: string;
    CustomLayoutOption: string;
    CustomActionOption: string;
    TemplateUrlFieldLabel: string;
    TemplateUrlPlaceholder: string;
    ErrorTemplateExtension: string;
    ErrorTemplateResolve: string;
    WebPartTitle: string;
    HandlebarsHelpersDescription: string;
    PromotedResultsLabel: string;
    PanelCloseButtonAria:string;  
    ConfigureBtnLabel: string;
    Sort: {
        SortPropertyPaneFieldLabel
        SortListDescription: string;
        SortDirectionAscendingLabel:string;
        SortDirectionDescendingLabel:string;
        SortErrorMessage:string;
        SortPanelSortFieldLabel:string;
        SortPanelSortFieldAria:string;
        SortPanelSortFieldPlaceHolder:string;
        SortPanelSortDirectionLabel:string;         
        SortableFieldsPropertyPaneField: string;
        SortableFieldsDescription: string;
        SortableFieldManagedPropertyField: string;   
        SortableFieldDisplayValueField: string;
    },
    Refiners: {
        RefinersFieldLabel: string;
        RefinersFieldDescription: string;
        RefinerManagedPropertyField: string;
        RefinerDisplayValueField: string;
    },
    TermNotFound: string;
    UseDefaultSearchQueryKeywordsFieldLabel: string;
    DefaultSearchQueryKeywordsFieldLabel: string;
    DefaultSearchQueryKeywordsFieldDescription: string;
}

declare module 'SearchResultsWebPartStrings' {
    const strings: ISearchResultsWebPartStrings;
    export = strings;
}
