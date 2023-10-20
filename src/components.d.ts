/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InformationDesk, Poi, SensitiveArea, TouristicContent, Trek } from "types/types";
export { InformationDesk, Poi, SensitiveArea, TouristicContent, Trek } from "types/types";
export namespace Components {
    interface GrwApp {
        "api": string;
        "appHeight": string;
        "appWidth": string;
        "attributionLayer": string;
        "center": string;
        "cities": string;
        "colorBackground": string;
        "colorOnPrimary": string;
        "colorOnPrimaryContainer": string;
        "colorOnSecondaryContainer": string;
        "colorOnSurface": string;
        "colorOnSurfaceVariant": string;
        "colorPoiIcon": string;
        "colorPrimaryApp": string;
        "colorPrimaryContainer": string;
        "colorSecondaryContainer": string;
        "colorSensitiveArea": string;
        "colorSurface": string;
        "colorSurfaceContainerHigh": string;
        "colorSurfaceContainerLow": string;
        "colorSurfaceVariant": string;
        "colorTrekLine": string;
        "districts": string;
        "fabBackgroundColor": string;
        "fabColor": string;
        "inBbox": string;
        "languages": string;
        "nameLayer": string;
        "portals": string;
        "practices": string;
        "routes": string;
        "structures": string;
        "themes": string;
        "urlLayer": string;
        "useGradient": boolean;
        "weather": boolean;
        "zoom": number;
    }
    interface GrwFilter {
        "filterName": string;
        "filterNameProperty": string;
        "filterType": string;
        "segment": string;
    }
    interface GrwInformationDesk {
        "informationDesk": InformationDesk;
    }
    interface GrwMap {
        "attributionLayer": string;
        "center": string;
        "colorBackground": string;
        "colorOnPrimaryContainer": string;
        "colorOnSurface": string;
        "colorPoiIcon": string;
        "colorPrimaryApp": string;
        "colorPrimaryContainer": string;
        "colorSensitiveArea": string;
        "colorTrekLine": string;
        "isLargeView": boolean;
        "nameLayer": string;
        "resetStoreOnDisconnected": boolean;
        "urlLayer": string;
        "useGradient": boolean;
        "zoom": number;
    }
    interface GrwPoi {
        "poi": Poi;
    }
    interface GrwSearch {
    }
    interface GrwSelectLanguage {
    }
    interface GrwSensitiveAreaDetail {
        "sensitiveArea": SensitiveArea;
    }
    interface GrwTouristicContent {
        "touristicContent": TouristicContent;
    }
    interface GrwTrekCard {
        "colorOnSecondaryContainer": string;
        "colorOnSurface": string;
        "colorPrimaryApp": string;
        "colorSecondaryContainer": string;
        "colorSurfaceContainerLow": string;
        "isLargeView": boolean;
        "isStep": false;
        "resetStoreOnDisconnected": boolean;
        "trek": Trek;
    }
    interface GrwTrekDetail {
        "colorBackground": string;
        "colorOnPrimaryContainer": string;
        "colorOnSecondaryContainer": string;
        "colorOnSurface": string;
        "colorPrimaryApp": string;
        "colorPrimaryContainer": string;
        "colorSecondaryContainer": string;
        "colorSurfaceContainerLow": string;
        "isLargeView": boolean;
        "resetStoreOnDisconnected": boolean;
        "trek": Trek;
        "weather": boolean;
    }
    interface GrwTrekProvider {
        "api": string;
        "languages": string;
        "trekId": string;
    }
    interface GrwTreksList {
        "colorOnSecondaryContainer": string;
        "colorOnSurface": string;
        "colorPrimaryApp": string;
        "colorSecondaryContainer": string;
        "colorSurfaceContainerLow": string;
        "isLargeView": boolean;
        "resetStoreOnDisconnected": boolean;
    }
    interface GrwTreksProvider {
        "api": string;
        "cities": string;
        "districts": string;
        "inBbox": string;
        "languages": string;
        "portals": string;
        "practices": string;
        "routes": string;
        "structures": string;
        "themes": string;
    }
}
export interface GrwAppCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGrwAppElement;
}
export interface GrwInformationDeskCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGrwInformationDeskElement;
}
export interface GrwMapCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGrwMapElement;
}
export interface GrwTrekCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGrwTrekCardElement;
}
export interface GrwTrekDetailCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGrwTrekDetailElement;
}
declare global {
    interface HTMLGrwAppElement extends Components.GrwApp, HTMLStencilElement {
    }
    var HTMLGrwAppElement: {
        prototype: HTMLGrwAppElement;
        new (): HTMLGrwAppElement;
    };
    interface HTMLGrwFilterElement extends Components.GrwFilter, HTMLStencilElement {
    }
    var HTMLGrwFilterElement: {
        prototype: HTMLGrwFilterElement;
        new (): HTMLGrwFilterElement;
    };
    interface HTMLGrwInformationDeskElement extends Components.GrwInformationDesk, HTMLStencilElement {
    }
    var HTMLGrwInformationDeskElement: {
        prototype: HTMLGrwInformationDeskElement;
        new (): HTMLGrwInformationDeskElement;
    };
    interface HTMLGrwMapElement extends Components.GrwMap, HTMLStencilElement {
    }
    var HTMLGrwMapElement: {
        prototype: HTMLGrwMapElement;
        new (): HTMLGrwMapElement;
    };
    interface HTMLGrwPoiElement extends Components.GrwPoi, HTMLStencilElement {
    }
    var HTMLGrwPoiElement: {
        prototype: HTMLGrwPoiElement;
        new (): HTMLGrwPoiElement;
    };
    interface HTMLGrwSearchElement extends Components.GrwSearch, HTMLStencilElement {
    }
    var HTMLGrwSearchElement: {
        prototype: HTMLGrwSearchElement;
        new (): HTMLGrwSearchElement;
    };
    interface HTMLGrwSelectLanguageElement extends Components.GrwSelectLanguage, HTMLStencilElement {
    }
    var HTMLGrwSelectLanguageElement: {
        prototype: HTMLGrwSelectLanguageElement;
        new (): HTMLGrwSelectLanguageElement;
    };
    interface HTMLGrwSensitiveAreaDetailElement extends Components.GrwSensitiveAreaDetail, HTMLStencilElement {
    }
    var HTMLGrwSensitiveAreaDetailElement: {
        prototype: HTMLGrwSensitiveAreaDetailElement;
        new (): HTMLGrwSensitiveAreaDetailElement;
    };
    interface HTMLGrwTouristicContentElement extends Components.GrwTouristicContent, HTMLStencilElement {
    }
    var HTMLGrwTouristicContentElement: {
        prototype: HTMLGrwTouristicContentElement;
        new (): HTMLGrwTouristicContentElement;
    };
    interface HTMLGrwTrekCardElement extends Components.GrwTrekCard, HTMLStencilElement {
    }
    var HTMLGrwTrekCardElement: {
        prototype: HTMLGrwTrekCardElement;
        new (): HTMLGrwTrekCardElement;
    };
    interface HTMLGrwTrekDetailElement extends Components.GrwTrekDetail, HTMLStencilElement {
    }
    var HTMLGrwTrekDetailElement: {
        prototype: HTMLGrwTrekDetailElement;
        new (): HTMLGrwTrekDetailElement;
    };
    interface HTMLGrwTrekProviderElement extends Components.GrwTrekProvider, HTMLStencilElement {
    }
    var HTMLGrwTrekProviderElement: {
        prototype: HTMLGrwTrekProviderElement;
        new (): HTMLGrwTrekProviderElement;
    };
    interface HTMLGrwTreksListElement extends Components.GrwTreksList, HTMLStencilElement {
    }
    var HTMLGrwTreksListElement: {
        prototype: HTMLGrwTreksListElement;
        new (): HTMLGrwTreksListElement;
    };
    interface HTMLGrwTreksProviderElement extends Components.GrwTreksProvider, HTMLStencilElement {
    }
    var HTMLGrwTreksProviderElement: {
        prototype: HTMLGrwTreksProviderElement;
        new (): HTMLGrwTreksProviderElement;
    };
    interface HTMLElementTagNameMap {
        "grw-app": HTMLGrwAppElement;
        "grw-filter": HTMLGrwFilterElement;
        "grw-information-desk": HTMLGrwInformationDeskElement;
        "grw-map": HTMLGrwMapElement;
        "grw-poi": HTMLGrwPoiElement;
        "grw-search": HTMLGrwSearchElement;
        "grw-select-language": HTMLGrwSelectLanguageElement;
        "grw-sensitive-area-detail": HTMLGrwSensitiveAreaDetailElement;
        "grw-touristic-content": HTMLGrwTouristicContentElement;
        "grw-trek-card": HTMLGrwTrekCardElement;
        "grw-trek-detail": HTMLGrwTrekDetailElement;
        "grw-trek-provider": HTMLGrwTrekProviderElement;
        "grw-treks-list": HTMLGrwTreksListElement;
        "grw-treks-provider": HTMLGrwTreksProviderElement;
    }
}
declare namespace LocalJSX {
    interface GrwApp {
        "api"?: string;
        "appHeight"?: string;
        "appWidth"?: string;
        "attributionLayer"?: string;
        "center"?: string;
        "cities"?: string;
        "colorBackground"?: string;
        "colorOnPrimary"?: string;
        "colorOnPrimaryContainer"?: string;
        "colorOnSecondaryContainer"?: string;
        "colorOnSurface"?: string;
        "colorOnSurfaceVariant"?: string;
        "colorPoiIcon"?: string;
        "colorPrimaryApp"?: string;
        "colorPrimaryContainer"?: string;
        "colorSecondaryContainer"?: string;
        "colorSensitiveArea"?: string;
        "colorSurface"?: string;
        "colorSurfaceContainerHigh"?: string;
        "colorSurfaceContainerLow"?: string;
        "colorSurfaceVariant"?: string;
        "colorTrekLine"?: string;
        "districts"?: string;
        "fabBackgroundColor"?: string;
        "fabColor"?: string;
        "inBbox"?: string;
        "languages"?: string;
        "nameLayer"?: string;
        "onResetFilter"?: (event: GrwAppCustomEvent<any>) => void;
        "portals"?: string;
        "practices"?: string;
        "routes"?: string;
        "structures"?: string;
        "themes"?: string;
        "urlLayer"?: string;
        "useGradient"?: boolean;
        "weather"?: boolean;
        "zoom"?: number;
    }
    interface GrwFilter {
        "filterName"?: string;
        "filterNameProperty"?: string;
        "filterType"?: string;
        "segment"?: string;
    }
    interface GrwInformationDesk {
        "informationDesk"?: InformationDesk;
        "onCenterOnMap"?: (event: GrwInformationDeskCustomEvent<{ latitude: number; longitude: number }>) => void;
    }
    interface GrwMap {
        "attributionLayer"?: string;
        "center"?: string;
        "colorBackground"?: string;
        "colorOnPrimaryContainer"?: string;
        "colorOnSurface"?: string;
        "colorPoiIcon"?: string;
        "colorPrimaryApp"?: string;
        "colorPrimaryContainer"?: string;
        "colorSensitiveArea"?: string;
        "colorTrekLine"?: string;
        "isLargeView"?: boolean;
        "nameLayer"?: string;
        "onTrekCardPress"?: (event: GrwMapCustomEvent<number>) => void;
        "resetStoreOnDisconnected"?: boolean;
        "urlLayer"?: string;
        "useGradient"?: boolean;
        "zoom"?: number;
    }
    interface GrwPoi {
        "poi"?: Poi;
    }
    interface GrwSearch {
    }
    interface GrwSelectLanguage {
    }
    interface GrwSensitiveAreaDetail {
        "sensitiveArea"?: SensitiveArea;
    }
    interface GrwTouristicContent {
        "touristicContent"?: TouristicContent;
    }
    interface GrwTrekCard {
        "colorOnSecondaryContainer"?: string;
        "colorOnSurface"?: string;
        "colorPrimaryApp"?: string;
        "colorSecondaryContainer"?: string;
        "colorSurfaceContainerLow"?: string;
        "isLargeView"?: boolean;
        "isStep"?: false;
        "onCardTrekMouseLeave"?: (event: GrwTrekCardCustomEvent<any>) => void;
        "onCardTrekMouseOver"?: (event: GrwTrekCardCustomEvent<number>) => void;
        "onTrekCardPress"?: (event: GrwTrekCardCustomEvent<number>) => void;
        "resetStoreOnDisconnected"?: boolean;
        "trek"?: Trek;
    }
    interface GrwTrekDetail {
        "colorBackground"?: string;
        "colorOnPrimaryContainer"?: string;
        "colorOnSecondaryContainer"?: string;
        "colorOnSurface"?: string;
        "colorPrimaryApp"?: string;
        "colorPrimaryContainer"?: string;
        "colorSecondaryContainer"?: string;
        "colorSurfaceContainerLow"?: string;
        "isLargeView"?: boolean;
        "onDescriptionIsInViewport"?: (event: GrwTrekDetailCustomEvent<boolean>) => void;
        "onInformationDeskIsInViewport"?: (event: GrwTrekDetailCustomEvent<boolean>) => void;
        "onParentTrekPress"?: (event: GrwTrekDetailCustomEvent<number>) => void;
        "onParkingIsInViewport"?: (event: GrwTrekDetailCustomEvent<boolean>) => void;
        "onPoiIsInViewport"?: (event: GrwTrekDetailCustomEvent<boolean>) => void;
        "onSensitiveAreaIsInViewport"?: (event: GrwTrekDetailCustomEvent<boolean>) => void;
        "onStepsIsInViewport"?: (event: GrwTrekDetailCustomEvent<boolean>) => void;
        "onTouristicContentsIsInViewport"?: (event: GrwTrekDetailCustomEvent<boolean>) => void;
        "resetStoreOnDisconnected"?: boolean;
        "trek"?: Trek;
        "weather"?: boolean;
    }
    interface GrwTrekProvider {
        "api"?: string;
        "languages"?: string;
        "trekId"?: string;
    }
    interface GrwTreksList {
        "colorOnSecondaryContainer"?: string;
        "colorOnSurface"?: string;
        "colorPrimaryApp"?: string;
        "colorSecondaryContainer"?: string;
        "colorSurfaceContainerLow"?: string;
        "isLargeView"?: boolean;
        "resetStoreOnDisconnected"?: boolean;
    }
    interface GrwTreksProvider {
        "api"?: string;
        "cities"?: string;
        "districts"?: string;
        "inBbox"?: string;
        "languages"?: string;
        "portals"?: string;
        "practices"?: string;
        "routes"?: string;
        "structures"?: string;
        "themes"?: string;
    }
    interface IntrinsicElements {
        "grw-app": GrwApp;
        "grw-filter": GrwFilter;
        "grw-information-desk": GrwInformationDesk;
        "grw-map": GrwMap;
        "grw-poi": GrwPoi;
        "grw-search": GrwSearch;
        "grw-select-language": GrwSelectLanguage;
        "grw-sensitive-area-detail": GrwSensitiveAreaDetail;
        "grw-touristic-content": GrwTouristicContent;
        "grw-trek-card": GrwTrekCard;
        "grw-trek-detail": GrwTrekDetail;
        "grw-trek-provider": GrwTrekProvider;
        "grw-treks-list": GrwTreksList;
        "grw-treks-provider": GrwTreksProvider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "grw-app": LocalJSX.GrwApp & JSXBase.HTMLAttributes<HTMLGrwAppElement>;
            "grw-filter": LocalJSX.GrwFilter & JSXBase.HTMLAttributes<HTMLGrwFilterElement>;
            "grw-information-desk": LocalJSX.GrwInformationDesk & JSXBase.HTMLAttributes<HTMLGrwInformationDeskElement>;
            "grw-map": LocalJSX.GrwMap & JSXBase.HTMLAttributes<HTMLGrwMapElement>;
            "grw-poi": LocalJSX.GrwPoi & JSXBase.HTMLAttributes<HTMLGrwPoiElement>;
            "grw-search": LocalJSX.GrwSearch & JSXBase.HTMLAttributes<HTMLGrwSearchElement>;
            "grw-select-language": LocalJSX.GrwSelectLanguage & JSXBase.HTMLAttributes<HTMLGrwSelectLanguageElement>;
            "grw-sensitive-area-detail": LocalJSX.GrwSensitiveAreaDetail & JSXBase.HTMLAttributes<HTMLGrwSensitiveAreaDetailElement>;
            "grw-touristic-content": LocalJSX.GrwTouristicContent & JSXBase.HTMLAttributes<HTMLGrwTouristicContentElement>;
            "grw-trek-card": LocalJSX.GrwTrekCard & JSXBase.HTMLAttributes<HTMLGrwTrekCardElement>;
            "grw-trek-detail": LocalJSX.GrwTrekDetail & JSXBase.HTMLAttributes<HTMLGrwTrekDetailElement>;
            "grw-trek-provider": LocalJSX.GrwTrekProvider & JSXBase.HTMLAttributes<HTMLGrwTrekProviderElement>;
            "grw-treks-list": LocalJSX.GrwTreksList & JSXBase.HTMLAttributes<HTMLGrwTreksListElement>;
            "grw-treks-provider": LocalJSX.GrwTreksProvider & JSXBase.HTMLAttributes<HTMLGrwTreksProviderElement>;
        }
    }
}
