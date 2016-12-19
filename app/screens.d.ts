export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export class BuildConfig {
                    public static DEBUG: boolean;
                    public static APPLICATION_ID: string;
                    public static BUILD_TYPE: string;
                    public static FLAVOR: string;
                    public static VERSION_CODE: number;
                    public static VERSION_NAME: string;
                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export class ScreensInitProvider {
                    public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
                    public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
                    public constructor();
                    public onCreate(): boolean;
                    public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
                    public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;
                    public getType(param0: android.net.Uri): string;
                    public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export class AssetEntry {
                        public values: java.util.Map<any, any>;
                        public constructor();
                        public describeContents(): number;
                        public getObjectType(): string;
                        public constructor(param0: java.util.Map<any, any>);
                        public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                        public getUrl(): string;
                        public getClassPK(): number;
                        public getClassName(): string;
                        public getValues(): java.util.Map<any, any>;
                        public getTitle(): string;
                        public getMimeType(): string;
                        public writeToParcel(param0: android.os.Parcel, param1: number): void;
                        public getEntryId(): number;
                        public getObject(): java.util.Map<any, any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export class AssetEvent extends com.liferay.mobile.screens.base.list.interactor.ListEvent {
                        public constructor();
                        public constructor(param0: java.lang.Exception);
                        public getListKey(): string;
                        public getAssetEntry(): com.liferay.mobile.screens.asset.AssetEntry;
                        public setAssetEntry(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                        public constructor(param0: org.json.JSONObject);
                        public constructor(param0: com.liferay.mobile.screens.asset.AssetEntry);
                        public getModel(): java.lang.Object;
                        public getModel(): com.liferay.mobile.screens.asset.AssetEntry;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export class AssetFactory {
                        public static createInstance(param0: java.util.Map<any, any>): com.liferay.mobile.screens.asset.AssetEntry;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module display {
                        export class AssetDisplayFactory {
                            public constructor();
                            public getScreenlet(param0: android.content.Context, param1: com.liferay.mobile.screens.asset.AssetEntry, param2: java.util.Map<any, any>): com.liferay.mobile.screens.base.BaseScreenlet;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.AssetDisplayScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module display {
                        export class AssetDisplayInnerScreenletListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.asset.display.AssetDisplayInnerScreenletListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onConfigureChildScreenlet(param0: com.liferay.mobile.screens.asset.display.AssetDisplayScreenlet, param1: com.liferay.mobile.screens.base.BaseScreenlet, param2: com.liferay.mobile.screens.asset.AssetEntry): void;
                                onRenderCustomAsset(param0: com.liferay.mobile.screens.asset.AssetEntry): android.view.View;
                            });
                            public onRenderCustomAsset(param0: com.liferay.mobile.screens.asset.AssetEntry): android.view.View;
                            public onConfigureChildScreenlet(param0: com.liferay.mobile.screens.asset.display.AssetDisplayScreenlet, param1: com.liferay.mobile.screens.base.BaseScreenlet, param2: com.liferay.mobile.screens.asset.AssetEntry): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module display {
                        export class AssetDisplayListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.asset.display.AssetDisplayListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.AssetDisplayInnerScreenletListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.AssetDisplayListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module display {
                        export class AssetDisplayScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.asset.display.AssetDisplayListener {
                            public static STATE_LAYOUTS: string;
                            public static STATE_ENTRY_ID: string;
                            public setEntryId(param0: number): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public getEntryId(): number;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public setClassPK(param0: number): void;
                            public getClassName(): string;
                            public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                            public onSaveInstanceState(): android.os.Parcelable;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public loadAsset(): void;
                            public setListener(param0: com.liferay.mobile.screens.asset.display.AssetDisplayListener): void;
                            public getClassPK(): number;
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public setInnerListener(param0: com.liferay.mobile.screens.asset.display.AssetDisplayInnerScreenletListener): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor;
                            public onScreenletAttached(): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public onRestoreInstanceState(param0: android.os.Parcelable): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public removeInnerScreenlet(): void;
                            public setClassName(param0: string): void;
                            public autoLoad(): void;
                            public setAutoLoad(param0: boolean): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor, param2: native.Array<java.lang.Object>): void;
                            public loadingFromCache(param0: boolean): void;
                            public load(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module display {
                        export class AssetDisplayViewModel {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.asset.display.AssetDisplayViewModel interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                showFinishOperation(param0: android.view.View): void;
                                removeInnerScreenlet(): void;
                                showStartOperation(param0: string): void;
                                showFinishOperation(param0: string): void;
                                showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            });
                            public removeInnerScreenlet(): void;
                            public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            public showFinishOperation(param0: string): void;
                            public showFinishOperation(param0: android.view.View): void;
                            public showStartOperation(param0: string): void;
                            public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.asset.AssetEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module display {
                        export module interactor {
                            export class AssetDisplayInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.asset.AssetEvent;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onSuccess(param0: com.liferay.mobile.screens.asset.AssetEvent): void;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public onFailure(param0: com.liferay.mobile.screens.asset.AssetEvent): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.list.interactor.AssetListInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListInteractor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export class AssetListScreenlet extends com.liferay.mobile.screens.base.list.BaseListScreenlet implements com.liferay.mobile.screens.base.list.interactor.BaseListInteractorListener {
                            public getPortletItemName(): string;
                            public setCustomEntryQuery(param0: java.util.HashMap<any, any>): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public error(param0: java.lang.Exception, param1: string): void;
                            public setPortletItemName(param0: string): void;
                            public getClassNameId(): number;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public getCustomEntryQuery(): java.util.Map<any, any>;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public loadRows(param0: com.liferay.mobile.screens.asset.list.interactor.AssetListInteractor): void;
                            public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public loadingFromCache(param0: boolean): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.asset.list.interactor.AssetListInteractor;
                            public setClassNameId(param0: number): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public loadRows(param0: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor): void;
                            public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                            public constructor(param0: android.content.Context);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export module connector {
                            export class AssetEntryConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    // getEntriesCount(param0: any): java.lang.Integer;
                                });
                                // public getEntriesCount(param0: any): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export module connector {
                            export class AssetEntryConnector62 {
                                // public constructor(param0: any);
                                // public getEntriesCount(param0: any): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
export module com {
    export module liferay {
        export module mobile {

            // export module android {
            //     export module service {
            //         export class Session {
            //
            //         }
            //         export class JSONObjectWrapper {
            //
            //         }
            //     }
            // }

            export module screens {
                export module asset {
                    export module list {
                        export module connector {
                            export class AssetEntryConnector70 {
                                // public constructor(param0: any);
                                // public getEntriesCount(param0: any): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export module connector {
                            export class ScreensAssetEntryConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    // getAssetEntries(param0: any, param1: string): org.json.JSONArray;
                                    getAssetEntries(param0: number, param1: number, param2: string, param3: string, param4: number): org.json.JSONArray;
                                });
                                // public getAssetEntries(param0: any, param1: string): org.json.JSONArray;
                                public getAssetEntries(param0: number, param1: number, param2: string, param3: string, param4: number): org.json.JSONArray;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export module connector {
                            export class ScreensAssetEntryConnector62 {
                                // public constructor(param0: any);
                                // public getAssetEntries(param0: any, param1: string): org.json.JSONArray;
                                public getAssetEntries(param0: number, param1: number, param2: string, param3: string, param4: number): org.json.JSONArray;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export module connector {
                            export class ScreensAssetEntryConnector70 {
                                // public constructor(param0: any);
                                // public getAssetEntries(param0: any, param1: string): org.json.JSONArray;
                                public getAssetEntries(param0: number, param1: number, param2: string, param3: string, param4: number): org.json.JSONArray;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.asset.AssetEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.ListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.Query.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export module interactor {
                            export class AssetListInteractor extends com.liferay.mobile.screens.base.list.interactor.BaseListInteractor {
                                public getPageRowCountRequest(param0: native.Array<java.lang.Object>): java.lang.Integer;
                                public execute(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.list.interactor.BaseListEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.asset.AssetEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.list.interactor.BaseListEvent;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public configureEntryQuery(param0: number, param1: number, param2: java.util.Map<any, any>): org.json.JSONObject;
                                public validate(param0: number, param1: number, param2: java.util.Locale): void;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public getPageRowsRequest(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): org.json.JSONArray;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.base.list.interactor.ListEvent;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public validate(param0: number, param1: number, param2: java.util.Locale, param3: string, param4: number): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module asset {
                    export module list {
                        export module view {
                            export class AssetListViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.asset.list.view.AssetListViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                public showStartOperation(param0: string): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export class BasicAuthMethod {
                        public static EMAIL: com.liferay.mobile.screens.auth.BasicAuthMethod;
                        public static SCREEN_NAME: com.liferay.mobile.screens.auth.BasicAuthMethod;
                        public static USER_ID: com.liferay.mobile.screens.auth.BasicAuthMethod;
                        public static getValue(param0: number): com.liferay.mobile.screens.auth.BasicAuthMethod;
                        public getInputType(): number;
                        public static valueOf(param0: string): com.liferay.mobile.screens.auth.BasicAuthMethod;
                        public static values(): native.Array<com.liferay.mobile.screens.auth.BasicAuthMethod>;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export class BasicAuthViewModel {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.auth.BasicAuthViewModel interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                            setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                            showStartOperation(param0: string): void;
                            showFinishOperation(param0: string): void;
                            showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                        });
                        public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                        public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                        public showFinishOperation(param0: string): void;
                        public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                        public showStartOperation(param0: string): void;
                        public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                        public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module forgotpassword {
                        export class ForgotPasswordListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.auth.forgotpassword.ForgotPasswordListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onForgotPasswordRequestSuccess(param0: boolean): void;
                                onForgotPasswordRequestFailure(param0: java.lang.Exception): void;
                            });
                            public onForgotPasswordRequestSuccess(param0: boolean): void;
                            public onForgotPasswordRequestFailure(param0: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.forgotpassword.ForgotPasswordListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.forgotpassword.interactor.ForgotPasswordInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module forgotpassword {
                        export class ForgotPasswordScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.auth.forgotpassword.ForgotPasswordListener {
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public getAnonymousApiPassword(): string;
                            public setListener(param0: com.liferay.mobile.screens.auth.forgotpassword.ForgotPasswordListener): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public setAnonymousApiPassword(param0: string): void;
                            public setAnonymousApiUserName(param0: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public getCompanyId(): number;
                            public onForgotPasswordRequestFailure(param0: java.lang.Exception): void;
                            public onForgotPasswordRequestSuccess(param0: boolean): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public createInteractor(param0: string): com.liferay.mobile.screens.auth.forgotpassword.interactor.ForgotPasswordInteractor;
                            public getAnonymousApiUserName(): string;
                            public setCompanyId(param0: number): void;
                            public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                            public getListener(): com.liferay.mobile.screens.auth.forgotpassword.ForgotPasswordListener;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public loadingFromCache(param0: boolean): void;
                            public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.auth.forgotpassword.interactor.ForgotPasswordInteractor, param2: native.Array<java.lang.Object>): void;
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module forgotpassword {
                        export module connector {
                            export class ForgotPasswordConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    sendPasswordByEmailAddress(param0: number, param1: string): java.lang.Boolean;
                                    sendPasswordByScreenName(param0: number, param1: string): java.lang.Boolean;
                                    sendPasswordByUserId(param0: number): java.lang.Boolean;
                                });
                                public sendPasswordByUserId(param0: number): java.lang.Boolean;
                                public sendPasswordByEmailAddress(param0: number, param1: string): java.lang.Boolean;
                                public sendPasswordByScreenName(param0: number, param1: string): java.lang.Boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module forgotpassword {
                        export module interactor {
                            export class ForgotPasswordEvent extends com.liferay.mobile.screens.base.interactor.event.BasicEvent {
                                public isPasswordSent(): boolean;
                                public constructor(param0: java.lang.Exception);
                                public constructor(param0: java.lang.Boolean);
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.forgotpassword.interactor.ForgotPasswordEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module forgotpassword {
                        export module interactor {
                            export class ForgotPasswordInteractor extends com.liferay.mobile.screens.base.interactor.BaseRemoteInteractor {
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public onFailure(param0: com.liferay.mobile.screens.auth.forgotpassword.interactor.ForgotPasswordEvent): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.auth.forgotpassword.interactor.ForgotPasswordEvent;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onSuccess(param0: com.liferay.mobile.screens.auth.forgotpassword.interactor.ForgotPasswordEvent): void;
                                public constructor();
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public validate(param0: number, param1: string, param2: com.liferay.mobile.screens.auth.BasicAuthMethod, param3: string, param4: string): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module forgotpassword {
                        export module view {
                            export class ForgotPasswordViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.auth.forgotpassword.view.ForgotPasswordViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getLogin(): string;
                                    showFinishOperation(param0: boolean): void;
                                    getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                                    setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                                public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showStartOperation(param0: string): void;
                                public getLogin(): string;
                                public showFinishOperation(param0: boolean): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export class LoginListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.auth.gallery.LoginListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onLoginSuccess(param0: com.liferay.mobile.screens.context.User): void;
                                onLoginFailure(param0: java.lang.Exception): void;
                            });
                            public onLoginSuccess(param0: com.liferay.mobile.screens.context.User): void;
                            public onLoginFailure(param0: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.LoginListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.interactor.BaseLoginInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export class LoginScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.auth.login.LoginListener {
                            public static OAUTH: string;
                            public static BASIC_AUTH: string;
                            public static REQUEST_OAUTH_CODE: number;
                            public static LOGIN_SUCCESSFUL: string;
                            public constructor(param0: android.content.Context);
                            public setCredentialsStorage(param0: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public setOAuthConsumerSecret(param0: string): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.auth.login.interactor.BaseLoginInteractor;
                            public setOAuthConsumerKey(param0: string): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.auth.login.interactor.BaseLoginInteractor, param2: native.Array<java.lang.Object>): void;
                            public setOauthConsumerSecret(param0: string): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public onLoginSuccess(param0: com.liferay.mobile.screens.context.User): void;
                            public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public constructor(param0: android.content.Context);
                            public getOAuthConsumerKey(): string;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public getOAuthConsumerSecret(): string;
                            public setOauthConsumerKey(param0: string): void;
                            public getOauthConsumerSecret(): string;
                            public sendOAuthResult(param0: number, param1: android.content.Intent): void;
                            public getCredentialsStorage(): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType;
                            public getOauthConsumerKey(): string;
                            public storingToCache(param0: java.lang.Object): void;
                            public onLoginFailure(param0: java.lang.Exception): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                            public loadingFromCache(param0: boolean): void;
                            public setListener(param0: com.liferay.mobile.screens.auth.login.LoginListener): void;
                            public getAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module connector {
                            export class CurrentUserConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.auth.gallery.connector.CurrentUserConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getCurrentUser(): org.json.JSONObject;
                                });
                                public getCurrentUser(): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module connector {
                            export class ScreensUserConnector62 {
                                public sendPasswordByUserId(param0: number): java.lang.Boolean;
                                // public constructor(param0: any);
                                public sendPasswordByEmailAddress(param0: number, param1: string): java.lang.Boolean;
                                public getCurrentUser(): org.json.JSONObject;
                                public sendPasswordByScreenName(param0: number, param1: string): java.lang.Boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module connector {
                            export class UserConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.auth.gallery.connector.UserConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getUserByEmailAddress(param0: number, param1: string): org.json.JSONObject;
                                    getUserById(param0: number): org.json.JSONObject;
                                    getUserByScreenName(param0: number, param1: string): org.json.JSONObject;
                                    addUser(param0: number, param1: boolean, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: number, param8: string, param9: string, param10: string, param11: string, param12: string, param13: number, param14: number, param15: boolean, param16: number, param17: number, param18: number, param19: string, param20: org.json.JSONArray, param21: org.json.JSONArray, param22: org.json.JSONArray, param23: org.json.JSONArray, param24: boolean, param25: any): org.json.JSONObject;
                                    // updateUser(param0: number, param1: string, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: string, param8: string, param9: number, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string, param17: string, param18: number, param19: number, param20: boolean, param21: number, param22: number, param23: number, param24: string, param25: string, param26: string, param27: string, param28: string, param29: string, param30: string, param31: string, param32: string, param33: string, param34: string, param35: org.json.JSONArray, param36: org.json.JSONArray, param37: org.json.JSONArray, param38: org.json.JSONArray, param39: org.json.JSONArray, param40: any): org.json.JSONObject;
                                    updatePortrait(param0: number, param1: native.Array<number>): org.json.JSONObject;
                                });
                                public getUserByScreenName(param0: number, param1: string): org.json.JSONObject;
                                public addUser(param0: number, param1: boolean, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: number, param8: string, param9: string, param10: string, param11: string, param12: string, param13: number, param14: number, param15: boolean, param16: number, param17: number, param18: number, param19: string, param20: org.json.JSONArray, param21: org.json.JSONArray, param22: org.json.JSONArray, param23: org.json.JSONArray, param24: boolean, param25: any): org.json.JSONObject;
                                public getUserById(param0: number): org.json.JSONObject;
                                public updatePortrait(param0: number, param1: native.Array<number>): org.json.JSONObject;
                                public getUserByEmailAddress(param0: number, param1: string): org.json.JSONObject;
                                // public updateUser(param0: number, param1: string, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: string, param8: string, param9: number, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string, param17: string, param18: number, param19: number, param20: boolean, param21: number, param22: number, param23: number, param24: string, param25: string, param26: string, param27: string, param28: string, param29: string, param30: string, param31: string, param32: string, param33: string, param34: string, param35: org.json.JSONArray, param36: org.json.JSONArray, param37: org.json.JSONArray, param38: org.json.JSONArray, param39: org.json.JSONArray, param40: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module connector {
                            export class UserConnector62 {
                                public getUserByScreenName(param0: number, param1: string): org.json.JSONObject;
                                // public constructor(param0: any);
                                // public addUser(param0: number, param1: boolean, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: number, param8: string, param9: string, param10: string, param11: string, param12: string, param13: number, param14: number, param15: boolean, param16: number, param17: number, param18: number, param19: string, param20: org.json.JSONArray, param21: org.json.JSONArray, param22: org.json.JSONArray, param23: org.json.JSONArray, param24: boolean, param25: any): org.json.JSONObject;
                                public getUserById(param0: number): org.json.JSONObject;
                                public updatePortrait(param0: number, param1: native.Array<number>): org.json.JSONObject;
                                public getUserByEmailAddress(param0: number, param1: string): org.json.JSONObject;
                                // public updateUser(param0: number, param1: string, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: string, param8: string, param9: number, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string, param17: string, param18: number, param19: number, param20: boolean, param21: number, param22: number, param23: number, param24: string, param25: string, param26: string, param27: string, param28: string, param29: string, param30: string, param31: string, param32: string, param33: string, param34: string, param35: org.json.JSONArray, param36: org.json.JSONArray, param37: org.json.JSONArray, param38: org.json.JSONArray, param39: org.json.JSONArray, param40: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module connector {
                            export class UserConnector70 {
                                public getUserByScreenName(param0: number, param1: string): org.json.JSONObject;
                                public sendPasswordByUserId(param0: number): java.lang.Boolean;
                                // public constructor(param0: any);
                                public addUser(param0: number, param1: boolean, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: number, param8: string, param9: string, param10: string, param11: string, param12: string, param13: number, param14: number, param15: boolean, param16: number, param17: number, param18: number, param19: string, param20: org.json.JSONArray, param21: org.json.JSONArray, param22: org.json.JSONArray, param23: org.json.JSONArray, param24: boolean, param25: any): org.json.JSONObject;
                                public getUserById(param0: number): org.json.JSONObject;
                                public sendPasswordByEmailAddress(param0: number, param1: string): java.lang.Boolean;
                                public getCurrentUser(): org.json.JSONObject;
                                public updatePortrait(param0: number, param1: native.Array<number>): org.json.JSONObject;
                                public getUserByEmailAddress(param0: number, param1: string): org.json.JSONObject;
                                public sendPasswordByScreenName(param0: number, param1: string): java.lang.Boolean;
                                // public updateUser(param0: number, param1: string, param2: string, param3: string, param4: boolean, param5: string, param6: string, param7: string, param8: string, param9: number, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string, param17: string, param18: number, param19: number, param20: boolean, param21: number, param22: number, param23: number, param24: string, param25: string, param26: string, param27: string, param28: string, param29: string, param30: string, param31: string, param32: string, param33: string, param34: string, param35: org.json.JSONArray, param36: org.json.JSONArray, param37: org.json.JSONArray, param38: org.json.JSONArray, param39: org.json.JSONArray, param40: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module interactor {
                            export abstract class BaseLoginInteractor extends com.liferay.mobile.screens.base.interactor.BaseRemoteInteractor {
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.connector.UserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module interactor {
                            export class LoginBasicInteractor extends com.liferay.mobile.screens.auth.login.interactor.BaseLoginInteractor {
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public getUserConnector(param0: string, param1: string): com.liferay.mobile.screens.auth.login.connector.UserConnector;
                                public getUser(param0: string, param1: com.liferay.mobile.screens.auth.BasicAuthMethod, param2: com.liferay.mobile.screens.auth.login.connector.UserConnector): org.json.JSONObject;
                                public validate(param0: string, param1: string, param2: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                                public constructor();
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.oauth.OAuthConfig.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module interactor {
                            export class LoginOAuthInteractor extends com.liferay.mobile.screens.auth.login.interactor.BaseLoginInteractor {
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                // public getOAuthConfig(): com.liferay.mobile.android.oauth.OAuthConfig;
                                public constructor();
                                // public setOAuthConfig(param0: com.liferay.mobile.android.oauth.OAuthConfig): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.AuthenticationType.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module login {
                        export module view {
                            export class LoginViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.auth.gallery.view.LoginViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getLogin(): string;
                                    getPassword(): string;
                                    setAuthenticationType(param0: com.liferay.mobile.screens.context.AuthenticationType): void;
                                    showFinishOperation(param0: com.liferay.mobile.screens.context.User): void;
                                    getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                                    setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                                public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                                public getPassword(): string;
                                public showFinishOperation(param0: com.liferay.mobile.screens.context.User): void;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public setAuthenticationType(param0: com.liferay.mobile.screens.context.AuthenticationType): void;
                                public showStartOperation(param0: string): void;
                                public getLogin(): string;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module signup {
                        export class SignUpListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.auth.signup.SignUpListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onSignUpFailure(param0: java.lang.Exception): void;
                                onSignUpSuccess(param0: com.liferay.mobile.screens.context.User): void;
                            });
                            public onSignUpFailure(param0: java.lang.Exception): void;
                            public onSignUpSuccess(param0: com.liferay.mobile.screens.context.User): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.LoginListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.signup.SignUpListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.signup.interactor.SignUpInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module signup {
                        export class SignUpScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.auth.signup.SignUpListener {
                            public getAutoLoginListener(): com.liferay.mobile.screens.auth.login.LoginListener;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public setCredentialsStorage(param0: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public setAutoLogin(param0: boolean): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.auth.signup.interactor.SignUpInteractor;
                            public setAutoLoginListener(param0: com.liferay.mobile.screens.auth.login.LoginListener): void;
                            public setAnonymousApiUserName(param0: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public getAuthUsernameFromUser(param0: com.liferay.mobile.screens.context.User): string;
                            public getAnonymousApiUserName(): string;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public getAnonymousApiPassword(): string;
                            public setAnonymousApiPassword(param0: string): void;
                            public getCredentialsStorage(): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType;
                            public storingToCache(param0: java.lang.Object): void;
                            public getCompanyId(): number;
                            public onSignUpSuccess(param0: com.liferay.mobile.screens.context.User): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.auth.signup.interactor.SignUpInteractor, param2: native.Array<java.lang.Object>): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public onSignUpFailure(param0: java.lang.Exception): void;
                            public isAutoLogin(): boolean;
                            public getListener(): com.liferay.mobile.screens.auth.signup.SignUpListener;
                            public setCompanyId(param0: number): void;
                            public setListener(param0: com.liferay.mobile.screens.auth.signup.SignUpListener): void;
                            public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                            public loadingFromCache(param0: boolean): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.auth.login.connector.UserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module signup {
                        export module interactor {
                            export class SignUpInteractor extends com.liferay.mobile.screens.base.interactor.BaseRemoteInteractor {
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public validate(param0: number, param1: string, param2: string, param3: java.util.Locale, param4: string, param5: string): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public sendSignUpRequest(param0: com.liferay.mobile.screens.auth.login.connector.UserConnector, param1: number, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: java.util.Locale): org.json.JSONObject;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module auth {
                    export module signup {
                        export module view {
                            export class SignUpViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.auth.signup.view.SignUpViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getEmailAddress(): string;
                                    getFirstName(): string;
                                    getLastName(): string;
                                    getPassword(): string;
                                    showFinishOperation(param0: com.liferay.mobile.screens.context.User): void;
                                    getMiddleName(): string;
                                    getScreenName(): string;
                                    getJobTitle(): string;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public getPassword(): string;
                                public showFinishOperation(param0: com.liferay.mobile.screens.context.User): void;
                                public getJobTitle(): string;
                                public showStartOperation(param0: string): void;
                                public getScreenName(): string;
                                public getFirstName(): string;
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public getLastName(): string;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public getMiddleName(): string;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public getEmailAddress(): string;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.context.storage.CredentialsStorage.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.storage.sharedPreferences.BasicCredentialsStorageSharedPreferences.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export class AbstractFactory {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.base.AbstractFactory interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            getBasicCredentialsStorageSharedPreferences(): com.liferay.mobile.screens.context.storage.sharedPreferences.BasicCredentialsStorageSharedPreferences;
                            getOAuthCredentialsStorageSharedPreferences(): com.liferay.mobile.screens.context.storage.CredentialsStorage;
                        });
                        public getOAuthCredentialsStorageSharedPreferences(): com.liferay.mobile.screens.context.storage.CredentialsStorage;
                        public getBasicCredentialsStorageSharedPreferences(): com.liferay.mobile.screens.context.storage.sharedPreferences.BasicCredentialsStorageSharedPreferences;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.CustomInteractorListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.CacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.view.BaseViewModel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.cache.CachePolicy.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export abstract class BaseScreenlet {
                        public static DEFAULT_ACTION: string;
                        public static STATE_CACHE_POLICY: string;
                        public static STATE_GROUP_ID: string;
                        public static STATE_USER_ID: string;
                        public static STATE_LOCALE: string;
                        public static STATE_SUPER: string;
                        public cachePolicy: com.liferay.mobile.screens.cache.CachePolicy;
                        public groupId: number;
                        public userId: number;
                        public locale: java.util.Locale;
                        public cacheListener: com.liferay.mobile.screens.base.interactor.listener.CacheListener;
                        public init(param0: android.content.Context, param1: android.util.AttributeSet): void;
                        public setGroupId(param0: number): void;
                        public getCachePolicy(): com.liferay.mobile.screens.cache.CachePolicy;
                        public getLocale(): java.util.Locale;
                        public onAttachedToWindow(): void;
                        public getScreenletId(): number;
                        public getViewModel(): com.liferay.mobile.screens.base.view.BaseViewModel;
                        public setCustomInteractorListener(param0: com.liferay.mobile.screens.base.interactor.CustomInteractorListener): void;
                        public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                        public constructor(param0: android.content.Context);
                        public getGroupId(): number;
                        public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                        public onSaveInstanceState(): android.os.Parcelable;
                        public getInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        public performUserAction(param0: string, param1: native.Array<java.lang.Object>): void;
                        public getDefaultLayoutId(): number;
                        public render(param0: number): void;
                        public onScreenletAttached(): void;
                        public onScreenletDetached(): void;
                        public setCacheListener(param0: com.liferay.mobile.screens.base.interactor.listener.CacheListener): void;
                        public getInteractor(): com.liferay.mobile.screens.base.interactor.Interactor;
                        public onDetachedFromWindow(): void;
                        public getCacheListener(): com.liferay.mobile.screens.base.interactor.listener.CacheListener;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                        public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        public castToLong(param0: string): number;
                        public assignView(param0: android.view.View): void;
                        public loadingFromCache(param0: boolean): void;
                        public getUserId(): number;
                        public setLocale(param0: java.util.Locale): void;
                        public decorateInteractor(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor): void;
                        public castToLongOrUseDefault(param0: string, param1: number): number;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public setUserId(param0: number): void;
                        public getLayoutTheme(): string;
                        public setCachePolicy(param0: com.liferay.mobile.screens.cache.CachePolicy): void;
                        public performUserAction(): void;
                        public storingToCache(param0: java.lang.Object): void;
                        public prepareInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        public onRestoreInstanceState(param0: android.os.Parcelable): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.context.storage.CredentialsStorage.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.storage.sharedPreferences.BasicCredentialsStorageSharedPreferences.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export class FactoryCE {
                        public constructor();
                        public getOAuthCredentialsStorageSharedPreferences(): com.liferay.mobile.screens.context.storage.CredentialsStorage;
                        public getBasicCredentialsStorageSharedPreferences(): com.liferay.mobile.screens.context.storage.sharedPreferences.BasicCredentialsStorageSharedPreferences;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.AbstractFactory.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export class FactoryProvider {
                        public static getInstance(): com.liferay.mobile.screens.base.AbstractFactory;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export class MediaStoreEvent {
                        public getFilePath(): string;
                        public constructor(param0: string);
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export class MediaStoreRequestShadowActivity {
                        public static SELECT_IMAGE_FROM_GALLERY: number;
                        public static TAKE_PICTURE_WITH_CAMERA: number;
                        public static MEDIA_STORE_TYPE: string;
                        public constructor();
                        public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
                        public onCreate(param0: android.os.Bundle): void;
                    }
                }
            }
        }
    }
}

export module rx {
    export module functions {
        export class Action1 {
            
        }
    }
}

/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./rx.functions.Action1.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export class MediaStoreSelectorDialog {
                        public constructor();
                        public createOriginDialog(param0: android.content.Context, param1: rx.functions.Action1, param2: rx.functions.Action1, param3: rx.functions.Action1): android.app.AlertDialog;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export class ModalProgressBar {
                        public init(param0: android.content.Context, param1: android.util.AttributeSet): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public setVisibility(param0: number, param1: native.Array<android.view.View>): void;
                        public setVisibility(param0: number): void;
                        public startProgress(): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public finishProgress(): void;
                        public constructor(param0: android.content.Context);
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module context {
                        export class RequestState {
                            public constructor();
                            public put(param0: number, param1: java.lang.Object): void;
                            public remove(param0: number, param1: java.lang.Object): void;
                            public contains(param0: number, param1: java.lang.Object): boolean;
                            public clear(param0: number): void;
                            public static getInstance(): com.liferay.mobile.screens.base.context.RequestState;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.CacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.cache.CachePolicy.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export abstract class BaseCacheReadInteractor extends com.liferay.mobile.screens.base.interactor.BaseInteractor {
                            public groupId: number;
                            public userId: number;
                            public locale: java.util.Locale;
                            public cachePolicy: com.liferay.mobile.screens.cache.CachePolicy;
                            public cacheListener: com.liferay.mobile.screens.base.interactor.listener.CacheListener;
                            public constructor();
                            public start(param0: native.Array<java.lang.Object>): void;
                            public setGroupId(param0: number): void;
                            public storingToCache(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                            public onScreenletAttached(param0: java.lang.Object): void;
                            public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                            public setLocale(param0: java.util.Locale): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public setUserId(param0: number): void;
                            public setCachePolicy(param0: com.liferay.mobile.screens.cache.CachePolicy): void;
                            public decorateEvent(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent, param1: boolean): void;
                            public onEventMainThread(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                            public cached(param0: native.Array<java.lang.Object>): boolean;
                            public online(param0: boolean, param1: java.lang.Exception, param2: native.Array<java.lang.Object>): void;
                            public loadingFromCache(param0: boolean): void;
                            public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public onScreenletDetached(param0: java.lang.Object): void;
                            public getCachePolicy(): com.liferay.mobile.screens.cache.CachePolicy;
                            public storeToCache(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export abstract class BaseCacheWriteInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                            public constructor();
                            public start(param0: native.Array<java.lang.Object>): void;
                            public onScreenletAttached(param0: java.lang.Object): void;
                            public online(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                            public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                            public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                            public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                            public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public store(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                            public storeToCacheAndLaunchEvent(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                            public start(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                            public onEventMainThread(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                            public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                            public online(param0: boolean, param1: java.lang.Exception, param2: native.Array<java.lang.Object>): void;
                            public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public onScreenletDetached(param0: java.lang.Object): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export abstract class BaseInteractor {
                            public listener: java.lang.Object;
                            public constructor();
                            public start(param0: native.Array<java.lang.Object>): void;
                            public setTargetScreenletId(param0: number): void;
                            public onScreenletAttached(param0: java.lang.Object): void;
                            public getActionName(): string;
                            public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public getEventClass(): java.lang.Class<any>;
                            public decorateBaseEvent(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public getTargetScreenletId(): number;
                            public processEvent(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public createErrorEvent(param0: java.lang.Exception): void;
                            public getListener(): java.lang.Object;
                            public setActionName(param0: string): void;
                            public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                            public isInvalidEvent(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): boolean;
                            // public getSession(): com.liferay.mobile.android.service.Session;
                            public onScreenletDetached(param0: java.lang.Object): void;
                            public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export abstract class BaseRemoteInteractor extends com.liferay.mobile.screens.base.interactor.BaseInteractor {
                            public constructor();
                            public onScreenletAttached(param0: java.lang.Object): void;
                            public onEventMainThread(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public onScreenletDetached(param0: java.lang.Object): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export class CustomInteractorListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.base.interactor.CustomInteractorListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            });
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export class Interactor {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.base.interactor.Interactor interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onScreenletAttached(param0: java.lang.Object): void;
                                onScreenletDetached(param0: java.lang.Object): void;
                            });
                            public onScreenletAttached(param0: java.lang.Object): void;
                            public onScreenletDetached(param0: java.lang.Object): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export module event {
                            export class BasicEvent {
                                public getException(): java.lang.Exception;
                                public constructor(param0: java.lang.Exception);
                                public setTargetScreenletId(param0: number): void;
                                public getJSONObject(): org.json.JSONObject;
                                public getActionName(): string;
                                public getTargetScreenletId(): number;
                                public setJSONObject(param0: org.json.JSONObject): void;
                                public isFailed(): boolean;
                                public setActionName(param0: string): void;
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                                public setException(param0: java.lang.Exception): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export module event {
                            export abstract class CacheEvent extends com.liferay.mobile.screens.base.interactor.event.BasicEvent {
                                public getUserId(): number;
                                public getGroupId(): number;
                                public setCached(param0: boolean): void;
                                public setDirty(param0: boolean): void;
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                                public getSyncDate(): java.util.Date;
                                public setGroupId(param0: number): void;
                                public isOnlineRequest(): boolean;
                                public setLocale(param0: java.util.Locale): void;
                                public setDeleted(param0: boolean): void;
                                public setUserId(param0: number): void;
                                public isDeleted(): boolean;
                                public constructor(param0: java.lang.Exception);
                                public getCacheKey(): string;
                                public setSyncDate(param0: java.util.Date): void;
                                public getLocale(): java.util.Locale;
                                public isDirty(): boolean;
                                public setCacheKey(param0: string): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export module listener {
                            export class BaseCacheListener {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    error(param0: java.lang.Exception, param1: string): void;
                                });
                                public error(param0: java.lang.Exception, param1: string): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module interactor {
                        export module listener {
                            export class CacheListener {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.base.interactor.listener.CacheListener interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    loadingFromCache(param0: boolean): void;
                                    retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                                    storingToCache(param0: java.lang.Object): void;
                                });
                                public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                                public loadingFromCache(param0: boolean): void;
                                public storingToCache(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export abstract class BaseListAdapter {
                            public static LAYOUT_TYPE_DEFAULT: number;
                            public static LAYOUT_TYPE_PROGRESS: number;
                            public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                            public getItemViewType(param0: number): number;
                            public getProgressLayoutId(): number;
                            public setRowCount(param0: number): void;
                            public getListener(): com.liferay.mobile.screens.base.list.BaseListAdapterListener;
                            public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                            public getEntries(): java.util.List<any>;
                            public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                            public getLabelFields(): java.util.List<any>;
                            public getItemCount(): number;
                            public setLabelFields(param0: java.util.List<any>): void;
                            public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                            public getLayoutId(): number;
                            public onBindViewHolder(param0: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder, param1: number): void;
                        }
                        export module BaseListAdapter {
                            export class ViewHolder {
                                public textView: android.widget.TextView;
                                public onClick(param0: android.view.View): void;
                                public constructor(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export class BaseListAdapterListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.base.list.BaseListAdapterListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onPageNotFound(param0: number): void;
                                onItemClick(param0: number, param1: android.view.View): void;
                            });
                            public onItemClick(param0: number, param1: android.view.View): void;
                            public onPageNotFound(param0: number): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export class BaseListListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.base.list.BaseListListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onListPageFailed(param0: number, param1: java.lang.Exception): void;
                                onListPageReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                onListItemSelected(param0: java.lang.Object, param1: android.view.View): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onListPageReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public onListItemSelected(param0: java.lang.Object, param1: android.view.View): void;
                            public onListPageFailed(param0: number, param1: java.lang.Exception): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListInteractor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export abstract class BaseListScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.base.list.interactor.BaseListInteractorListener {
                            public static LOAD_INITIAL_PAGE_ACTION: string;
                            public static FIRST_PAGE_SIZE: number;
                            public static PAGE_SIZE: number;
                            public autoLoad: boolean;
                            public firstPageSize: number;
                            public listener: com.liferay.mobile.screens.base.list.BaseListListener;
                            public pageSize: number;
                            public obcClassName: string;
                            public getFirstPageSize(): number;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public setFirstPageSize(param0: number): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public getListener(): com.liferay.mobile.screens.base.list.BaseListListener;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public setListener(param0: com.liferay.mobile.screens.base.list.BaseListListener): void;
                            public loadPage(param0: number): void;
                            public getLabelFields(): java.util.List<any>;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public setLabelFields(param0: java.util.List<any>): void;
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public getPageFromRow(param0: number): number;
                            public isAutoLoad(): boolean;
                            public onScreenletAttached(): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public setPageSize(param0: number): void;
                            public loadPageForRow(param0: number): void;
                            public getPageSize(): number;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor, param2: native.Array<java.lang.Object>): void;
                            public setAutoLoad(param0: boolean): void;
                            public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public loadingFromCache(param0: boolean): void;
                            public getFirstRowForPage(param0: number): number;
                            public loadRows(param0: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor): void;
                            public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export abstract class BaseListScreenletView {
                            public firstRow: number;
                            public progressBar: android.widget.ProgressBar;
                            public recyclerView: any;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public showFinishOperation(param0: string): void;
                            public onPageNotFound(param0: number): void;
                            public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                            public getItemLayoutId(): number;
                            public setRecyclerView(param0: any): void;
                            public getDividerDecoration(): any;
                            public getAdapter(): com.liferay.mobile.screens.base.list.BaseListAdapter;
                            public getRecyclerView(): any;
                            public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                            public onSaveInstanceState(): android.os.Parcelable;
                            public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public constructor(param0: android.content.Context);
                            public getItemProgressLayoutId(): number;
                            public onFinishInflate(): void;
                            public onRestoreInstanceState(param0: android.os.Parcelable): void;
                            public setProgressBar(param0: android.widget.ProgressBar): void;
                            public onItemClick(param0: number, param1: android.view.View): void;
                            public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            public showStartOperation(param0: string): void;
                            public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            public getProgressBar(): android.widget.ProgressBar;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.list.interactor.Query.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export module interactor {
                            export class BaseListEvent extends com.liferay.mobile.screens.base.interactor.event.CacheEvent {
                                public getEndRow(): number;
                                public constructor(param0: java.lang.Exception);
                                public getQuery(): com.liferay.mobile.screens.base.list.interactor.Query;
                                public constructor();
                                public getStartRow(): number;
                                public getRowCount(): number;
                                public setQuery(param0: com.liferay.mobile.screens.base.list.interactor.Query): void;
                                public constructor(param0: org.json.JSONObject);
                                public constructor(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: java.util.List<any>, param2: number);
                                public setEntries(param0: java.util.List<any>): void;
                                public getEntries(): java.util.List<any>;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.ListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.Query.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export module interactor {
                            export abstract class BaseListInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                public query: com.liferay.mobile.screens.base.list.interactor.Query;
                                public getPageRowCountRequest(param0: native.Array<java.lang.Object>): java.lang.Integer;
                                public execute(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.list.interactor.BaseListEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public online(param0: boolean, param1: java.lang.Exception, param2: native.Array<java.lang.Object>): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.list.interactor.BaseListEvent): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.list.interactor.BaseListEvent;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public storeToCache(param0: com.liferay.mobile.screens.base.list.interactor.BaseListEvent): void;
                                public cached(param0: native.Array<java.lang.Object>): boolean;
                                public constructor();
                                public setQuery(param0: com.liferay.mobile.screens.base.list.interactor.Query): void;
                                public cleanRequestState(param0: com.liferay.mobile.screens.base.list.interactor.Query): void;
                                public validate(param0: number, param1: number, param2: java.util.Locale): void;
                                public createErrorEvent(param0: java.lang.Exception): void;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public getPageRowsRequest(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): org.json.JSONArray;
                                public notRequestingRightNow(param0: com.liferay.mobile.screens.base.list.interactor.Query): boolean;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.base.list.interactor.ListEvent;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.list.interactor.BaseListEvent): void;
                                public storeToCache(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export module interactor {
                            export class BaseListInteractorListener {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.base.list.interactor.BaseListInteractorListener interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                                    onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    error(param0: java.lang.Exception, param1: string): void;
                                });
                                public error(param0: java.lang.Exception, param1: string): void;
                                public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                                public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export module interactor {
                            export abstract class ListEvent extends com.liferay.mobile.screens.base.interactor.event.CacheEvent {
                                public constructor(param0: java.lang.Exception);
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                                public getListKey(): string;
                                public getModel(): java.lang.Object;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.util.Pair.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export module interactor {
                            export class Query {
                                public setEndRow(param0: number): void;
                                public getComparatorJSONWrapper(): any;
                                public getComparator(): string;
                                public constructor();
                                public getStartRow(): number;
                                public getLimit(): number;
                                public constructor(param0: number, param1: number, param2: string);
                                public getEndRowFormatted(): string;
                                public constructor(param0: com.liferay.mobile.screens.base.list.interactor.Query);
                                public getEndRow(): number;
                                public getStartRowFormatted(): string;
                                public getRowRange(): any;
                                public setStartRow(param0: number): void;
                                public setComparator(param0: string): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module list {
                        export module view {
                            export class BaseListViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.base.list.view.BaseListViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                public showStartOperation(param0: string): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module base {
                    export module view {
                        export class BaseViewModel {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.base.view.BaseViewModel interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                showStartOperation(param0: string): void;
                                showFinishOperation(param0: string): void;
                                showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            });
                            public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            public showFinishOperation(param0: string): void;
                            public showStartOperation(param0: string): void;
                            public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module blogs {
                    export class BlogsEntry extends com.liferay.mobile.screens.asset.AssetEntry {
                        public getDate(): string;
                        public constructor();
                        public getBlogsEntry(): java.util.Map<any, any>;
                        public getCoverImage(): number;
                        public constructor(param0: java.util.Map<any, any>);
                        public getContent(): string;
                        public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                        public getUserName(): string;
                        public getUserId(): number;
                        public getSubtitle(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.AssetDisplayListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.blogs.BlogsEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module blogs {
                    export class BlogsEntryDisplayScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.asset.display.AssetDisplayListener {
                        public static LOAD_BLOGS_ACTION: string;
                        public createInteractor(param0: string): com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor;
                        public setListener(param0: com.liferay.mobile.screens.asset.display.AssetDisplayListener): void;
                        public loadBlogsEntry(): void;
                        public load(): void;
                        public getClassPK(): number;
                        public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public getClassName(): string;
                        public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                        public getAutoLoad(): boolean;
                        public constructor(param0: android.content.Context);
                        public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                        public getEntryId(): number;
                        public setAutoLoad(param0: boolean): void;
                        public setEntryId(param0: number): void;
                        public onScreenletAttached(): void;
                        public setBlogsEntry(param0: com.liferay.mobile.screens.blogs.BlogsEntry): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                        public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        public setClassName(param0: string): void;
                        public loadingFromCache(param0: boolean): void;
                        public autoLoad(): void;
                        public getBlogsEntry(): com.liferay.mobile.screens.blogs.BlogsEntry;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public storingToCache(param0: java.lang.Object): void;
                        public error(param0: java.lang.Exception, param1: string): void;
                        public getListener(): com.liferay.mobile.screens.asset.display.AssetDisplayListener;
                        public onUserAction(param0: string, param1: com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor, param2: native.Array<java.lang.Object>): void;
                        public setClassPK(param0: number): void;
                        public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.blogs.BlogsEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module blogs {
                    export class BlogsEntryDisplayViewModel {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.blogs.BlogsEntryDisplayViewModel interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            showFinishOperation(param0: com.liferay.mobile.screens.blogs.BlogsEntry): void;
                            showStartOperation(param0: string): void;
                            showFinishOperation(param0: string): void;
                            showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                        });
                        public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                        public showFinishOperation(param0: string): void;
                        public showFinishOperation(param0: com.liferay.mobile.screens.blogs.BlogsEntry): void;
                        public showStartOperation(param0: string): void;
                        public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                        public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.snappydb.DB.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module cache {
                    export class Cache {
                        public static SEPARATOR: string;
                        public static getObject(param0: java.lang.Class<any>, param1: java.lang.Long, param2: java.lang.Long, param3: string): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                        public static storeObject(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                        public static deleteObject(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                        public static destroy(param0: java.lang.Long, param1: java.lang.Long, param2: string): boolean;
                        public static storeObject(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent, param1: java.lang.Integer): void;
                        public static resync(): void;
                        public static getObject(param0: java.lang.Class<any>, param1: java.lang.Long, param2: java.lang.Long, param3: java.util.Locale, param4: string): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                        public static findKeys(param0: java.lang.Class<any>, param1: java.lang.Long, param2: java.lang.Long, param3: java.util.Locale, param4: number, param5: number): native.Array<string>;
                        public static destroy(param0: java.lang.Long, param1: java.lang.Long): boolean;
                    }
                    export module Cache {
                        export class Func1 {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.cache.Cache$Func1 interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                call(param0: any): java.lang.Object;
                            });
                            public call(param0: any): java.lang.Object;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module cache {
                    export class CachePolicy {
                        public static REMOTE_ONLY: com.liferay.mobile.screens.cache.CachePolicy;
                        public static CACHE_ONLY: com.liferay.mobile.screens.cache.CachePolicy;
                        public static CACHE_FIRST: com.liferay.mobile.screens.cache.CachePolicy;
                        public static REMOTE_FIRST: com.liferay.mobile.screens.cache.CachePolicy;
                        public static valueOf(param0: string): com.liferay.mobile.screens.cache.CachePolicy;
                        public static values(): native.Array<com.liferay.mobile.screens.cache.CachePolicy>;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module cache {
                    export class CacheReceiver {
                        public constructor();
                        public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module cache {
                    export class CacheSyncService {
                        public constructor();
                        public onHandleIntent(param0: android.content.Intent): void;
                        public onEventMainThread(param0: com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent): void;
                        public onEventMainThread(param0: com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent): void;
                    }
                    export module CacheSyncService {
                        export class SyncProvider {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.cache.CacheSyncService$SyncProvider interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                getCacheEvent(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                            });
                            public getCacheEvent(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module cache {
                    export module executor {
                        export class Executor {
                            public static N_THREADS: number;
                            public static getExecutor(): java.util.concurrent.ExecutorService;
                            public static execute(param0: java.lang.Runnable): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export class CommentEntry {
                        public static CREATOR: any;
                        public values: java.util.Map<any, any>;
                        public constructor();
                        public isDeletable(): boolean;
                        public describeContents(): number;
                        public constructor(param0: java.util.Map<any, any>);
                        public hashCode(): number;
                        public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                        public getUserName(): string;
                        public getValues(): java.util.Map<any, any>;
                        public getUserId(): number;
                        public getBody(): string;
                        public getCreateDateAsTimeSpan(): string;
                        public equals(param0: java.lang.Object): boolean;
                        public getCreateDate(): number;
                        public getCommentId(): number;
                        public writeToParcel(param0: android.os.Parcel, param1: number): void;
                        public getModifiedDate(): number;
                        public isUpdatable(): boolean;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module add {
                        export class CommentAddListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.comment.add.CommentAddListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onAddCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onAddCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.add.CommentAddListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.add.interactor.CommentAddInteractor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module add {
                        export class CommentAddScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.comment.add.CommentAddListener {
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public onAddCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public setListener(param0: com.liferay.mobile.screens.comment.add.CommentAddListener): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public getListener(): com.liferay.mobile.screens.comment.add.CommentAddListener;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public setClassPK(param0: number): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public getClassName(): string;
                            public setClassName(param0: string): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.comment.add.interactor.CommentAddInteractor, param2: native.Array<java.lang.Object>): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public createInteractor(param0: string): com.liferay.mobile.screens.comment.add.interactor.CommentAddInteractor;
                            public loadingFromCache(param0: boolean): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public getClassPK(): number;
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.display.interactor.CommentEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module add {
                        export module interactor {
                            export class CommentAddInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public validate(param0: string, param1: number, param2: string): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public onFailure(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                                public execute(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): com.liferay.mobile.screens.comment.display.interactor.CommentEvent;
                                public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onSuccess(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module add {
                        export module view {
                            export class CommentAddViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.comment.add.view.CommentAddViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showStartOperation(param0: string): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export class CommentDisplayListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.comment.display.CommentDisplayListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onLoadCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                onDeleteCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onLoadCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public onDeleteCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.cache.CachePolicy.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.display.CommentDisplayListener.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export class CommentDisplayScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.comment.display.interactor.CommentDisplayInteractorListener {
                            public static DELETE_COMMENT_ACTION: string;
                            public static UPDATE_COMMENT_ACTION: string;
                            public static LOAD_COMMENT_ACTION: string;
                            public static STATE_AUTO_LOAD: string;
                            public static STATE_COMMENT_ID: string;
                            public static STATE_COMMENT_ENTRY: string;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public getCommentEntry(): com.liferay.mobile.screens.comment.CommentEntry;
                            public onSaveInstanceState(): android.os.Parcelable;
                            public getCommentId(): number;
                            public onDeleteCommentSuccess(): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public setCommentId(param0: number): void;
                            public setListener(param0: com.liferay.mobile.screens.comment.display.CommentDisplayListener): void;
                            public getListener(): com.liferay.mobile.screens.comment.display.CommentDisplayListener;
                            public load(): void;
                            public onScreenletAttached(): void;
                            public setEditable(param0: boolean): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public onRestoreInstanceState(param0: android.os.Parcelable): void;
                            public setCachePolicy(param0: com.liferay.mobile.screens.cache.CachePolicy): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public autoLoad(): void;
                            public onLoadCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public loadingFromCache(param0: boolean): void;
                            public allowEdition(param0: boolean): void;
                            public setCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public getCachePolicy(): com.liferay.mobile.screens.cache.CachePolicy;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export module interactor {
                            export class CommentDisplayInteractorListener {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.comment.display.interactor.CommentDisplayInteractorListener interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    onLoadCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    onDeleteCommentSuccess(): void;
                                    onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    error(param0: java.lang.Exception, param1: string): void;
                                });
                                public error(param0: java.lang.Exception, param1: string): void;
                                public onLoadCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                public onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                public onDeleteCommentSuccess(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export module interactor {
                            export class CommentEvent extends com.liferay.mobile.screens.base.list.interactor.ListEvent {
                                public setCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                public getClassPK(): number;
                                public getCommentId(): number;
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                                public constructor(param0: number, param1: string);
                                public constructor(param0: number, param1: string, param2: com.liferay.mobile.screens.comment.CommentEntry);
                                public getModel(): com.liferay.mobile.screens.comment.CommentEntry;
                                public getListKey(): string;
                                public constructor(param0: java.lang.Exception);
                                public constructor(param0: number, param1: string, param2: number, param3: string);
                                public getCommentEntry(): com.liferay.mobile.screens.comment.CommentEntry;
                                public getBody(): string;
                                public getClassName(): string;
                                public getModel(): java.lang.Object;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.display.interactor.CommentEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export module interactor {
                            /*
                        // export module delete {
                        //     export class CommentDeleteInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                        //         public constructor();
                        //         public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                        //         public onScreenletAttached(param0: java.lang.Object): void;
                        //         public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                        //         public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                        //         public onSuccess(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                        //         public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                        //         public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                        //         public onFailure(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                        //         public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                        //         public onScreenletDetached(param0: java.lang.Object): void;
                        //         public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                        //         public execute(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): com.liferay.mobile.screens.comment.display.interactor.CommentEvent;
                        //         public validate(param0: number): void;
                        //     }
                        // }

                        */
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.display.interactor.CommentEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export module interactor {
                            export module load {
                                export class CommentLoadInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                    public constructor();
                                    public onSuccess(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                                    public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                                    public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onScreenletDetached(param0: java.lang.Object): void;
                                    public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public onScreenletAttached(param0: java.lang.Object): void;
                                    public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.comment.display.interactor.CommentEvent;
                                    public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.display.interactor.CommentEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export module interactor {
                            export module update {
                                export class CommentUpdateInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                    public constructor();
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public onScreenletAttached(param0: java.lang.Object): void;
                                    public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public validate(param0: number, param1: string): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                    public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): void;
                                    public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onScreenletDetached(param0: java.lang.Object): void;
                                    public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public execute(param0: com.liferay.mobile.screens.comment.display.interactor.CommentEvent): com.liferay.mobile.screens.comment.display.interactor.CommentEvent;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module display {
                        export module view {
                            export class CommentDisplayViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.comment.display.view.CommentDisplayViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    showFinishOperation(param0: string, param1: boolean): void;
                                    showFinishOperation(param0: string, param1: boolean, param2: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showStartOperation(param0: string): void;
                                public showFinishOperation(param0: string, param1: boolean, param2: com.liferay.mobile.screens.comment.CommentEntry): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public showFinishOperation(param0: string, param1: boolean): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module list {
                        export class CommentListListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.comment.list.CommentListListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onDeleteCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                onListPageFailed(param0: number, param1: java.lang.Exception): void;
                                onListPageReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                onListItemSelected(param0: java.lang.Object, param1: android.view.View): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onListPageReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public onListItemSelected(param0: java.lang.Object, param1: android.view.View): void;
                            public onDeleteCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public onListPageFailed(param0: number, param1: java.lang.Exception): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.view.BaseViewModel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.cache.CachePolicy.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.list.interactor.CommentListInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.list.view.CommentListViewModel.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module list {
                        export class CommentListScreenlet extends com.liferay.mobile.screens.base.list.BaseListScreenlet implements com.liferay.mobile.screens.comment.display.CommentDisplayListener, com.liferay.mobile.screens.base.list.interactor.BaseListInteractorListener {
                            public createInteractor(param0: string): com.liferay.mobile.screens.comment.list.interactor.CommentListInteractor;
                            public removeCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public loadRows(param0: com.liferay.mobile.screens.comment.list.interactor.CommentListInteractor): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public setClassPK(param0: number): void;
                            public getViewModel(): com.liferay.mobile.screens.comment.list.view.CommentListViewModel;
                            public getClassName(): string;
                            public onDeleteCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public getClassPK(): number;
                            public getViewModel(): com.liferay.mobile.screens.base.view.BaseViewModel;
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public onScreenletAttached(): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.comment.list.interactor.CommentListInteractor, param2: native.Array<java.lang.Object>): void;
                            public isEditable(): boolean;
                            public setCachePolicy(param0: com.liferay.mobile.screens.cache.CachePolicy): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor, param2: native.Array<java.lang.Object>): void;
                            public setClassName(param0: string): void;
                            public onLoadCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                            public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public loadingFromCache(param0: boolean): void;
                            public allowEdition(param0: boolean): void;
                            public loadRows(param0: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor): void;
                            public getCachePolicy(): com.liferay.mobile.screens.cache.CachePolicy;
                            public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                            public addNewCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.ListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.Query.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.display.interactor.CommentEvent.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module list {
                        export module interactor {
                            export class CommentListInteractor extends com.liferay.mobile.screens.base.list.interactor.BaseListInteractor {
                                public getPageRowCountRequest(param0: native.Array<java.lang.Object>): java.lang.Integer;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.comment.display.interactor.CommentEvent;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public getPageRowsRequest(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): org.json.JSONArray;
                                public validate(param0: string, param1: number): void;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.base.list.interactor.ListEvent;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public validate(param0: number, param1: number, param2: java.util.Locale): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module comment {
                    export module list {
                        export module view {
                            export class CommentListViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.comment.list.view.CommentListViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    allowEdition(param0: boolean): void;
                                    addNewCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    removeCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public removeCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                public allowEdition(param0: boolean): void;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                public showStartOperation(param0: string): void;
                                public addNewCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class AuthenticationType {
                        public static BASIC: com.liferay.mobile.screens.context.AuthenticationType;
                        public static OAUTH: com.liferay.mobile.screens.context.AuthenticationType;
                        public static VOID: com.liferay.mobile.screens.context.AuthenticationType;
                        public static values(): native.Array<com.liferay.mobile.screens.context.AuthenticationType>;
                        public static valueOf(param0: string): com.liferay.mobile.screens.context.AuthenticationType;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class LiferayPortalVersion {
                        public static VERSION_62: com.liferay.mobile.screens.context.LiferayPortalVersion;
                        public static VERSION_70: com.liferay.mobile.screens.context.LiferayPortalVersion;
                        public static values(): native.Array<com.liferay.mobile.screens.context.LiferayPortalVersion>;
                        public static fromInt(param0: number): com.liferay.mobile.screens.context.LiferayPortalVersion;
                        public static valueOf(param0: string): com.liferay.mobile.screens.context.LiferayPortalVersion;
                        public getVersion(): number;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class LiferayScreensContext {
                        public static deinit(): void;
                        public static init(param0: android.content.Context): void;
                        public static getActivityFromContext(param0: android.content.Context): android.app.Activity;
                        public static reinit(param0: android.content.Context): void;
                        public static getContext(): android.content.Context;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.LiferayPortalVersion.d.ts" />
/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class LiferayServerContext {
                        public static loadFromResources(param0: android.content.res.Resources, param1: string): void;
                        public static setGroupId(param0: number): void;
                        public static isLiferay7(): boolean;
                        public static getOkHttpClient(): any;
                        public static getOkHttpClientNoCache(): any;
                        public static reloadFromResources(param0: android.content.res.Resources, param1: string): void;
                        public static getCompanyId(): number;
                        public static getClassFactory(): string;
                        public static isLiferay62(): boolean;
                        public static getVersionFactory(): string;
                        public static getPortalVersion(): com.liferay.mobile.screens.context.LiferayPortalVersion;
                        public static setServer(param0: string): void;
                        public static setFactoryClass(param0: string): void;
                        public static setCompanyId(param0: number): void;
                        public static getServer(): string;
                        public static setPortalVersion(param0: com.liferay.mobile.screens.context.LiferayPortalVersion): void;
                        public static getGroupId(): number;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.oauth.OAuthConfig.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class OAuthAuthentication {
                        public constructor(param0: any);
                        public getToken(): string;
                        public getTokenSecret(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.liferay.mobile.screens.cache.CachePolicy.d.ts" />
/// <reference path="./com.squareup.picasso.RequestCreator.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class PicassoScreens {
                        public static setCachePolicy(param0: com.liferay.mobile.screens.cache.CachePolicy): void;
                        public static getCachePolicy(): com.liferay.mobile.screens.cache.CachePolicy;
                        public static load(param0: java.io.File): any;
                        public static load(param0: string): any;
                        public static load(param0: android.net.Uri): any;
                        public static load(param0: number): any;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.auth.Authentication.d.ts" />
/// <reference path="./com.liferay.mobile.android.oauth.OAuthConfig.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.LoginListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class SessionContext {
                        // public static getAuthentication(): com.liferay.mobile.android.auth.Authentication;
                        public static removeStoredCredentials(param0: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType): void;
                        public static storeCredentials(param0: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType): void;
                        // public static createBasicSession(param0: string, param1: string): com.liferay.mobile.android.service.Session;
                        public static hasUserInfo(): boolean;
                        public static isLoggedIn(): boolean;
                        // public static createOAuthSession(param0: com.liferay.mobile.android.oauth.OAuthConfig): com.liferay.mobile.android.service.Session;
                        // public static createSessionFromCurrentSession(): com.liferay.mobile.android.service.Session;
                        public static getCurrentUser(): com.liferay.mobile.screens.context.User;
                        public static getUserId(): java.lang.Long;
                        public static logout(): void;
                        public static loadStoredCredentials(param0: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType): void;
                        public static setCurrentUser(param0: com.liferay.mobile.screens.context.User): void;
                        public static relogin(param0: com.liferay.mobile.screens.auth.login.LoginListener): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export class User extends com.liferay.mobile.screens.asset.AssetEntry {
                        public static EMAIL_ADDRESS: string;
                        public static USER_ID: string;
                        public static UUID: string;
                        public static PORTRAIT_ID: string;
                        public static FIRST_NAME: string;
                        public static LAST_NAME: string;
                        public static SCREEN_NAME: string;
                        public static GREETING: string;
                        public static JOB_TITLE: string;
                        public constructor();
                        public getUuid(): string;
                        public getFullName(): string;
                        public getEmail(): string;
                        public getJobTitle(): string;
                        public constructor(param0: java.util.Map<any, any>);
                        public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                        public getLong(param0: string): number;
                        public constructor(param0: org.json.JSONObject);
                        public getGreeting(): string;
                        public toString(): string;
                        public getId(): number;
                        public getInt(param0: string): number;
                        public getLastName(): string;
                        public getPortraitId(): number;
                        public getFirstName(): string;
                        public getScreenName(): string;
                        public getString(param0: string): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liferay.mobile.android.auth.Authentication.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export module storage {
                        export class CredentialsStorage {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.context.storage.CredentialsStorage interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                storeCredentials(): void;
                                removeStoredCredentials(): void;
                                loadStoredCredentials(): boolean;
                                // getAuthentication(): com.liferay.mobile.android.auth.Authentication;
                                // setAuthentication(param0: com.liferay.mobile.android.auth.Authentication): void;
                                getUser(): com.liferay.mobile.screens.context.User;
                                setUser(param0: com.liferay.mobile.screens.context.User): void;
                                setContext(param0: android.content.Context): void;
                            });
                            public removeStoredCredentials(): void;
                            public storeCredentials(): void;
                            public getUser(): com.liferay.mobile.screens.context.User;
                            // public getAuthentication(): com.liferay.mobile.android.auth.Authentication;
                            public setUser(param0: com.liferay.mobile.screens.context.User): void;
                            // public setAuthentication(param0: com.liferay.mobile.android.auth.Authentication): void;
                            public loadStoredCredentials(): boolean;
                            public setContext(param0: android.content.Context): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liferay.mobile.android.auth.Authentication.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.storage.CredentialsStorage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export module storage {
                        export class CredentialsStorageBuilder {
                            public constructor();
                            // public setAuthentication(param0: com.liferay.mobile.android.auth.Authentication): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;
                            public createStore(): com.liferay.mobile.screens.context.storage.CredentialsStorage;
                            public setUser(param0: com.liferay.mobile.screens.context.User): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;
                            public setContext(param0: android.content.Context): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;
                            public setStorageType(param0: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;
                            public build(): com.liferay.mobile.screens.context.storage.CredentialsStorage;
                        }
                        export module CredentialsStorageBuilder {
                            export class StorageType {
                                public static NONE: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType;
                                public static AUTO: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType;
                                public static SHARED_PREFERENCES: com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType;
                                public static values(): native.Array<com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType>;
                                public toInt(): number;
                                public static valueOf(param0: string): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType;
                                public static valueOf(param0: number): com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liferay.mobile.android.auth.Authentication.d.ts" />
/// <reference path="./com.liferay.mobile.android.auth.basic.BasicAuthentication.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export module storage {
                        export class CredentialsStorageVoid {
                            public constructor();
                            public removeStoredCredentials(): void;
                            public storeCredentials(): void;
                            public getUser(): com.liferay.mobile.screens.context.User;
                            // public getAuthentication(): com.liferay.mobile.android.auth.basic.BasicAuthentication;
                            public setUser(param0: com.liferay.mobile.screens.context.User): void;
                            // public getAuthentication(): com.liferay.mobile.android.auth.Authentication;
                            // public setAuthentication(param0: com.liferay.mobile.android.auth.Authentication): void;
                            public loadStoredCredentials(): boolean;
                            public setContext(param0: android.content.Context): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./com.liferay.mobile.android.auth.Authentication.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.AuthenticationType.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export module storage {
                        export module sharedPreferences {
                            export abstract class BaseCredentialsStorageSharedPreferences {
                                public removeStoredCredentials(): void;
                                public loadStoredCredentials(): boolean;
                                public constructor();
                                public storeCredentials(): void;
                                public static getStoreName(): string;
                                // public storeAuth(param0: com.liferay.mobile.android.auth.Authentication): void;
                                public static getStoredAuthenticationType(param0: android.content.Context): com.liferay.mobile.screens.context.AuthenticationType;
                                public getSharedPref(): android.content.SharedPreferences;
                                // public getAuthentication(): com.liferay.mobile.android.auth.Authentication;
                                public setUser(param0: com.liferay.mobile.screens.context.User): void;
                                // public setAuthentication(param0: com.liferay.mobile.android.auth.Authentication): void;
                                public setContext(param0: android.content.Context): void;
                                // public loadAuth(): com.liferay.mobile.android.auth.Authentication;
                                public getUser(): com.liferay.mobile.screens.context.User;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liferay.mobile.android.auth.Authentication.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export module storage {
                        export module sharedPreferences {
                            export class BasicCredentialsStorageSharedPreferences extends com.liferay.mobile.screens.context.storage.sharedPreferences.BaseCredentialsStorageSharedPreferences {
                                public static AUTH: string;
                                public static USERNAME: string;
                                public static PASSWORD: string;
                                // public storeAuth(param0: com.liferay.mobile.android.auth.Authentication): void;
                                public removeStoredCredentials(): void;
                                public loadStoredCredentials(): boolean;
                                // public getAuthentication(): com.liferay.mobile.android.auth.Authentication;
                                public setUser(param0: com.liferay.mobile.screens.context.User): void;
                                // public setAuthentication(param0: com.liferay.mobile.android.auth.Authentication): void;
                                public constructor();
                                // public loadAuth(): com.liferay.mobile.android.auth.Authentication;
                                public setContext(param0: android.content.Context): void;
                                public storeCredentials(): void;
                                public getUser(): com.liferay.mobile.screens.context.User;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liferay.mobile.android.auth.Authentication.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module context {
                    export module storage {
                        export module sharedPreferences {
                            export class OAuthCredentialsStorageSharedPreferences extends com.liferay.mobile.screens.context.storage.sharedPreferences.BaseCredentialsStorageSharedPreferences {
                                public static AUTH: string;
                                public static OAUTH_CONSUMER_KEY: string;
                                public static OAUTH_CONSUMER_SECRET: string;
                                public static OAUTH_TOKEN: string;
                                public static OAUTH_TOKEN_SECRET: string;
                                // public storeAuth(param0: com.liferay.mobile.android.auth.Authentication): void;
                                public removeStoredCredentials(): void;
                                public loadStoredCredentials(): boolean;
                                // public getAuthentication(): com.liferay.mobile.android.auth.Authentication;
                                public setUser(param0: com.liferay.mobile.screens.context.User): void;
                                // public setAuthentication(param0: com.liferay.mobile.android.auth.Authentication): void;
                                public constructor();
                                // public loadAuth(): com.liferay.mobile.android.auth.Authentication;
                                public setContext(param0: android.content.Context): void;
                                public storeCredentials(): void;
                                public getUser(): com.liferay.mobile.screens.context.User;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export abstract class AbstractXMLParser {
                        public getDocument(param0: string): org.w3c.dom.Document;
                        public getAttributes(param0: org.w3c.dom.Element): java.util.Map<any, any>;
                        public constructor();
                        public getChildren(param0: org.w3c.dom.Element, param1: string, param2: string, param3: string): java.util.List<any>;
                        public getDefaultDocumentLocale(param0: org.w3c.dom.Element): java.util.Locale;
                        public getChildElementAndFallbackToLocale(param0: string, param1: java.util.Locale, param2: string): string;
                        public getLocaleFallbackFromString(param0: string, param1: java.util.Locale, param2: string, param3: string): string;
                        public getChild(param0: org.w3c.dom.Element, param1: string, param2: string, param3: string): org.w3c.dom.Element;
                        public getLocaleFallback(param0: org.w3c.dom.Element, param1: java.util.Locale, param2: java.util.Locale, param3: string, param4: string): org.w3c.dom.Element;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.ddl.model.DDMStructure.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export class ContentParser extends com.liferay.mobile.screens.ddl.AbstractXMLParser {
                        public constructor();
                        public getFieldByName(param0: java.util.List<any>, param1: string): com.liferay.mobile.screens.ddl.model.Field;
                        public parseContent(param0: com.liferay.mobile.screens.ddl.model.DDMStructure, param1: string): java.util.List<any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export class DDMStructureParser {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.ddl.DDMStructureParser interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            parse(param0: string, param1: java.util.Locale): java.util.List<any>;
                        });
                        public parse(param0: string, param1: java.util.Locale): java.util.List<any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export class FieldParser extends com.liferay.mobile.screens.ddl.AbstractXMLParser {
                        public constructor();
                        public parseStaticContent(param0: string, param1: java.util.Locale): string;
                        public parseTitle(param0: string, param1: java.util.Locale): string;
                        public parseField(param0: string, param1: java.util.Locale, param2: string): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export class JsonParser {
                        public findOptions(param0: org.json.JSONObject, param1: java.util.Locale, param2: java.util.Locale): java.util.List<any>;
                        public addLocalizedElement(param0: org.json.JSONObject, param1: string, param2: java.util.Locale, param3: java.util.Locale): string;
                        public constructor();
                        public addLocalizedElement(param0: org.json.JSONObject, param1: java.util.Locale, param2: java.util.Locale): string;
                        public parse(param0: string, param1: java.util.Locale): java.util.List<any>;
                        public getAttributes(param0: org.json.JSONObject): java.util.Map<any, any>;
                        public processDocument(param0: org.json.JSONObject, param1: java.util.Locale): java.util.List<any>;
                        public processLocalizedMetadata(param0: org.json.JSONObject, param1: java.util.Locale, param2: java.util.Locale): java.util.Map<any, any>;
                        public createFormField(param0: org.json.JSONObject, param1: java.util.Locale, param2: java.util.Locale): com.liferay.mobile.screens.ddl.model.Field;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export class XSDParser extends com.liferay.mobile.screens.ddl.AbstractXMLParser implements com.liferay.mobile.screens.ddl.DDMStructureParser {
                        public constructor();
                        public parse(param0: string, param1: java.util.Locale): java.util.List<any>;
                        public addLocalizedElement(param0: org.w3c.dom.Element, param1: string, param2: java.util.Map<any, any>): void;
                        public processLocalizedMetadata(param0: org.w3c.dom.Element, param1: java.util.Locale, param2: java.util.Locale): java.util.Map<any, any>;
                        public findMetadataElement(param0: org.w3c.dom.Element, param1: java.util.Locale, param2: java.util.Locale): org.w3c.dom.Element;
                        public createFormField(param0: org.w3c.dom.Element, param1: java.util.Locale, param2: java.util.Locale): com.liferay.mobile.screens.ddl.model.Field;
                        public findOptions(param0: org.w3c.dom.Element, param1: java.util.Locale, param2: java.util.Locale): java.util.List<any>;
                        public processDocument(param0: org.w3c.dom.Document, param1: java.util.Locale): java.util.List<any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.ddl.model.DocumentField.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export class DDLFormListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.DDLFormListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onDDLFormLoaded(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                onDDLFormRecordLoaded(param0: com.liferay.mobile.screens.ddl.model.Record, param1: java.util.Map<any, any>): void;
                                onDDLFormRecordAdded(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                onDDLFormRecordUpdated(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                onDDLFormDocumentUploaded(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: org.json.JSONObject): void;
                                onDDLFormDocumentUploadFailed(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: java.lang.Exception): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onDDLFormRecordAdded(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                            public onDDLFormRecordUpdated(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                            public onDDLFormRecordLoaded(param0: com.liferay.mobile.screens.ddl.model.Record, param1: java.util.Map<any, any>): void;
                            public onDDLFormDocumentUploadFailed(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: java.lang.Exception): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public onDDLFormLoaded(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                            public onDDLFormDocumentUploaded(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: org.json.JSONObject): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.DDLFormListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.DocumentField.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export class DDLFormScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.ddl.form.DDLFormListener {
                            public static LOAD_FORM_ACTION: string;
                            public static LOAD_RECORD_ACTION: string;
                            public static ADD_RECORD_ACTION: string;
                            public static UPDATE_RECORD_ACTION: string;
                            public static UPLOAD_DOCUMENT_ACTION: string;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public getListener(): com.liferay.mobile.screens.ddl.form.DDLFormListener;
                            public getRecordId(): number;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public setAutoScrollOnValidation(param0: boolean): void;
                            public getRecord(): com.liferay.mobile.screens.ddl.model.Record;
                            public onDDLFormLoaded(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                            public setRecordId(param0: number): void;
                            public setCustomFieldLayoutId(param0: string, param1: number): void;
                            public setFilePrefix(param0: string): void;
                            public onSaveInstanceState(): android.os.Parcelable;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public getFolderId(): number;
                            public constructor(param0: android.content.Context);
                            public isShowSubmitButton(): boolean;
                            public setListener(param0: com.liferay.mobile.screens.ddl.form.DDLFormListener): void;
                            public getFilePrefix(): string;
                            public setShowSubmitButton(param0: boolean): void;
                            public setFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType, param1: android.content.res.TypedArray, param2: number): void;
                            public startUpload(param0: com.liferay.mobile.screens.ddl.model.DocumentField): void;
                            public load(): void;
                            public onScreenletAttached(): void;
                            public submitForm(): void;
                            public validateForm(): boolean;
                            public onDDLFormRecordLoaded(param0: com.liferay.mobile.screens.ddl.model.Record, param1: java.util.Map<any, any>): void;
                            public setStructureId(param0: number): void;
                            public getStructureId(): number;
                            public loadingFromCache(param0: boolean): void;
                            public isLoadRecordAfterForm(): boolean;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public loadForm(): void;
                            public setRepositoryId(param0: number): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public getRepositoryId(): number;
                            public setRecord(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                            public onDDLFormDocumentUploaded(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: org.json.JSONObject): void;
                            public onDDLFormRecordAdded(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                            public getRecordSetId(): number;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public setLoadRecordAfterForm(param0: boolean): void;
                            public resetCustomFieldLayoutId(param0: string): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public isAutoScrollOnValidation(): boolean;
                            public startUploadByPosition(param0: number): void;
                            public isAutoLoad(): boolean;
                            public setFolderId(param0: number): void;
                            public onDDLFormDocumentUploadFailed(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: java.lang.Exception): void;
                            public setRecordSetId(param0: number): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public onRestoreInstanceState(param0: android.os.Parcelable): void;
                            public onDDLFormRecordUpdated(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public loadRecord(): void;
                            public setAutoLoad(param0: boolean): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDLRecordConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    // addRecord(param0: number, param1: number, param2: number, param3: org.json.JSONObject, param4: any): org.json.JSONObject;
                                    // updateRecord(param0: number, param1: number, param2: org.json.JSONObject, param3: boolean, param4: any): org.json.JSONObject;
                                });
                                // public addRecord(param0: number, param1: number, param2: number, param3: org.json.JSONObject, param4: any): org.json.JSONObject;
                                // public updateRecord(param0: number, param1: number, param2: org.json.JSONObject, param3: boolean, param4: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDLRecordConnector62 {
                                // public constructor(param0: any);
                                // public addRecord(param0: number, param1: number, param2: number, param3: org.json.JSONObject, param4: any): org.json.JSONObject;
                                // public updateRecord(param0: number, param1: number, param2: org.json.JSONObject, param3: boolean, param4: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDLRecordConnector70 {
                                // public constructor(param0: any);
                                // public addRecord(param0: number, param1: number, param2: number, param3: org.json.JSONObject, param4: any): org.json.JSONObject;
                                // public updateRecord(param0: number, param1: number, param2: org.json.JSONObject, param3: boolean, param4: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDLRecordSetConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getRecordSet(param0: number): void;
                                });
                                public getRecordSet(param0: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDLRecordSetConnector62 {
                                // public constructor(param0: any);
                                public getRecordSet(param0: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDLRecordSetConnector70 {
                                // public constructor(param0: any);
                                public getRecordSet(param0: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDMStructureConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getStructure(param0: number): org.json.JSONObject;
                                });
                                public getStructure(param0: number): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDMStructureConnector62 {
                                // public constructor(param0: any);
                                public getStructure(param0: number): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DDMStructureConnector70 {
                                // public constructor(param0: any);
                                public getStructure(param0: number): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DLAppConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.connector.DLAppConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    // addFileEntry(param0: java.lang.Long, param1: java.lang.Long, param2: string, param3: string, param4: string, param5: string, param6: string, param7: native.Array<number>, param8: any): org.json.JSONObject;
                                });
                                // public addFileEntry(param0: java.lang.Long, param1: java.lang.Long, param2: string, param3: string, param4: string, param5: string, param6: string, param7: native.Array<number>, param8: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DLAppConnector62 {
                                // public constructor(param0: any);
                                public addFileEntry(param0: java.lang.Long, param1: java.lang.Long, param2: string, param3: string, param4: string, param5: string, param6: string, param7: native.Array<number>, param8: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class DLAppConnector70 {
                                // public constructor(param0: any);
                                // public addFileEntry(param0: java.lang.Long, param1: java.lang.Long, param2: string, param3: string, param4: string, param5: string, param6: string, param7: native.Array<number>, param8: any): org.json.JSONObject;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class ScreensDDLRecordConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    // getDdlRecords(param0: number, param1: number, param2: string, param3: number, param4: number, param5: any): org.json.JSONArray;
                                    // getDdlRecords(param0: number, param1: string, param2: number, param3: number, param4: any): org.json.JSONArray;
                                    getDdlRecordsCount(param0: number, param1: number): java.lang.Integer;
                                    getDdlRecordsCount(param0: number): java.lang.Integer;
                                    getDdlRecord(param0: number, param1: string): org.json.JSONObject;
                                });
                                public getDdlRecord(param0: number, param1: string): org.json.JSONObject;
                                public getDdlRecordsCount(param0: number): java.lang.Integer;
                                // public getDdlRecords(param0: number, param1: string, param2: number, param3: number, param4: any): org.json.JSONArray;
                                // public getDdlRecords(param0: number, param1: number, param2: string, param3: number, param4: number, param5: any): org.json.JSONArray;
                                public getDdlRecordsCount(param0: number, param1: number): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class ScreensDDLRecordConnector62 {
                                // public constructor(param0: any);
                                public getDdlRecord(param0: number, param1: string): org.json.JSONObject;
                                public getDdlRecordsCount(param0: number): java.lang.Integer;
                                // public getDdlRecords(param0: number, param1: string, param2: number, param3: number, param4: any): org.json.JSONArray;
                                // public getDdlRecords(param0: number, param1: number, param2: string, param3: number, param4: number, param5: any): org.json.JSONArray;
                                public getDdlRecordsCount(param0: number, param1: number): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module connector {
                            export class ScreensDDLRecordConnector70 {
                                // public constructor(param0: any);
                                public getDdlRecord(param0: number, param1: string): org.json.JSONObject;
                                public getDdlRecordsCount(param0: number): java.lang.Integer;
                                // public getDdlRecords(param0: number, param1: string, param2: number, param3: number, param4: any): org.json.JSONArray;
                                // public getDdlRecords(param0: number, param1: number, param2: string, param3: number, param4: number, param5: any): org.json.JSONArray;
                                public getDdlRecordsCount(param0: number, param1: number): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module interactor {
                            export class DDLFormEvent extends com.liferay.mobile.screens.base.list.interactor.ListEvent {
                                public constructor(param0: com.liferay.mobile.screens.ddl.model.Record, param1: org.json.JSONObject);
                                public constructor(param0: java.lang.Exception);
                                public getRecord(): com.liferay.mobile.screens.ddl.model.Record;
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                                public getModel(): com.liferay.mobile.screens.ddl.model.Record;
                                public getListKey(): string;
                                public getModel(): java.lang.Object;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module interactor {
                            export module add {
                                export class DDLFormAddRecordInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                    public constructor();
                                    public validate(param0: number, param1: com.liferay.mobile.screens.ddl.model.Record): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                    public onScreenletAttached(param0: java.lang.Object): void;
                                    public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                    public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onScreenletDetached(param0: java.lang.Object): void;
                                    public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public execute(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent;
                                    public onSuccess(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module interactor {
                            export module formload {
                                export class DDLFormLoadInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                    public constructor();
                                    public onFailure(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                    public onScreenletAttached(param0: java.lang.Object): void;
                                    public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                    public validate(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onScreenletDetached(param0: java.lang.Object): void;
                                    public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent;
                                    public onSuccess(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module interactor {
                            export module recordload {
                                export class DDLFormLoadRecordInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                    public constructor();
                                    public onFailure(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                    public onScreenletAttached(param0: java.lang.Object): void;
                                    public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                    public validate(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onScreenletDetached(param0: java.lang.Object): void;
                                    public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent;
                                    public onSuccess(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module interactor {
                            export module update {
                                export class DDLFormUpdateRecordInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                    public constructor();
                                    public validate(param0: number, param1: com.liferay.mobile.screens.ddl.model.Record): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                    public onScreenletAttached(param0: java.lang.Object): void;
                                    public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                    public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onScreenletDetached(param0: java.lang.Object): void;
                                    public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public execute(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent;
                                    public onSuccess(param0: com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.ddl.model.DocumentField.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module interactor {
                            export module upload {
                                export class DDLFormDocumentUploadEvent extends com.liferay.mobile.screens.base.interactor.event.CacheEvent {
                                    public constructor(param0: org.json.JSONObject);
                                    public constructor();
                                    public getRepositoryId(): java.lang.Long;
                                    public constructor(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: java.lang.Long, param2: java.lang.Long, param3: string, param4: org.json.JSONObject);
                                    public getFolderId(): java.lang.Long;
                                    public getDocumentField(): com.liferay.mobile.screens.ddl.model.DocumentField;
                                    public constructor(param0: java.lang.Exception);
                                    public getFilePrefix(): string;
                                    public constructor(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: java.lang.Long, param2: java.lang.Long, param3: string);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module interactor {
                            export module upload {
                                export class DDLFormDocumentUploadInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                    public constructor();
                                    public online(param0: boolean, param1: java.lang.Exception, param2: native.Array<java.lang.Object>): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public onScreenletAttached(param0: java.lang.Object): void;
                                    public onFailure(param0: com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent): void;
                                    public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public online(param0: com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onSuccess(param0: com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent): void;
                                    public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                    public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                    public execute(param0: com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent): com.liferay.mobile.screens.ddl.form.interactor.upload.DDLFormDocumentUploadEvent;
                                    public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                    public onScreenletDetached(param0: java.lang.Object): void;
                                    public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                    public online(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.DocumentField.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module service {
                            export class UploadService {
                                public static CONNECTION_TIMEOUT: number;
                                public uploadFile(param0: com.liferay.mobile.screens.ddl.model.DocumentField, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Long, param4: java.lang.Long, param5: string): org.json.JSONObject;
                                public onHandleIntent(param0: android.content.Intent): void;
                                public constructor();
                                public uploadFromIntent(param0: android.content.Intent): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module view {
                            export class DDLFieldViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.view.DDLFieldViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getField(): com.liferay.mobile.screens.ddl.model.Field;
                                    setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                    refresh(): void;
                                    onPostValidation(param0: boolean): void;
                                    getParentView(): android.view.View;
                                    setParentView(param0: android.view.View): void;
                                    setPositionInParent(param0: number): void;
                                });
                                public onPostValidation(param0: boolean): void;
                                public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                public setParentView(param0: android.view.View): void;
                                public setPositionInParent(param0: number): void;
                                public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                public refresh(): void;
                                public getParentView(): android.view.View;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module form {
                        export module view {
                            export class DDLFormViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.form.view.DDLFormViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): number;
                                    setFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType, param1: number): void;
                                    resetFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): void;
                                    getCustomFieldLayoutId(param0: string): number;
                                    setCustomFieldLayoutId(param0: string, param1: number): void;
                                    resetCustomFieldLayoutId(param0: string): void;
                                    showValidationResults(param0: java.util.Map<any, any>, param1: boolean): void;
                                    showFormFields(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                    showStartOperation(param0: string, param1: java.lang.Object): void;
                                    showFinishOperation(param0: string, param1: java.lang.Object): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception, param2: java.lang.Object): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public getFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): number;
                                public showFormFields(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                public showValidationResults(param0: java.util.Map<any, any>, param1: boolean): void;
                                public resetCustomFieldLayoutId(param0: string): void;
                                public showStartOperation(param0: string): void;
                                public showStartOperation(param0: string, param1: java.lang.Object): void;
                                public showFinishOperation(param0: string, param1: java.lang.Object): void;
                                public resetFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): void;
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType, param1: number): void;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public getCustomFieldLayoutId(param0: string): number;
                                public setCustomFieldLayoutId(param0: string, param1: number): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception, param2: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.list.interactor.DDLListInteractor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module list {
                        export class DDLListScreenlet extends com.liferay.mobile.screens.base.list.BaseListScreenlet implements com.liferay.mobile.screens.base.list.interactor.BaseListInteractorListener {
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public setRecordSetId(param0: number): void;
                            public loadRows(param0: com.liferay.mobile.screens.ddl.list.interactor.DDLListInteractor): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public getRecordSetId(): number;
                            public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public createInteractor(param0: string): com.liferay.mobile.screens.ddl.list.interactor.DDLListInteractor;
                            public loadingFromCache(param0: boolean): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public loadRows(param0: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor): void;
                            public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                            public constructor(param0: android.content.Context);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.ListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.Query.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module list {
                        export module interactor {
                            export class DDLListInteractor extends com.liferay.mobile.screens.base.list.interactor.BaseListInteractor {
                                public getPageRowCountRequest(param0: native.Array<java.lang.Object>): java.lang.Integer;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public getPageRowsRequest(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): org.json.JSONArray;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.base.list.interactor.ListEvent;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.ddl.form.interactor.DDLFormEvent;
                                public validate(param0: number, param1: number, param2: java.util.Locale): void;
                                public validate(param0: number, param1: number, param2: number, param3: java.util.Locale): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module list {
                        export module view {
                            export class DDLListViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.ddl.list.view.DDLListViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                public showStartOperation(param0: string): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class BooleanField extends com.liferay.mobile.screens.ddl.model.Field {
                            public static CREATOR: any;
                            public constructor();
                            public convertFromString(param0: string): java.lang.Boolean;
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public convertToData(param0: java.io.Serializable): string;
                            public convertToFormattedString(param0: java.lang.Boolean): string;
                            public convertToFormattedString(param0: java.io.Serializable): string;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public convertFromString(param0: string): java.io.Serializable;
                            public convertToData(param0: java.lang.Boolean): string;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.DDMStructureParser.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class DDMStructure {
                            public static CREATOR: any;
                            public fields: java.util.List<any>;
                            public locale: java.util.Locale;
                            public parsed: boolean;
                            public constructor();
                            public parse(param0: org.json.JSONObject): void;
                            public setFields(param0: java.util.List<any>): void;
                            public isParsed(): boolean;
                            public setLocale(param0: java.util.Locale): void;
                            public getFieldCount(): number;
                            public getFields(): java.util.List<any>;
                            public writeToParcel(param0: android.os.Parcel, param1: number): void;
                            public getLocale(): java.util.Locale;
                            public getFieldByName(param0: string): com.liferay.mobile.screens.ddl.model.Field;
                            public parse(param0: string, param1: com.liferay.mobile.screens.ddl.DDMStructureParser): void;
                            public describeContents(): number;
                            public getField(param0: number): com.liferay.mobile.screens.ddl.model.Field;
                            public constructor(param0: java.util.Locale);
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class DateField extends com.liferay.mobile.screens.ddl.model.Field {
                            public static CREATOR: any;
                            public constructor();
                            public convertFromString(param0: string): java.util.Date;
                            public convertToData(param0: java.util.Date): string;
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public convertToData(param0: java.io.Serializable): string;
                            public convertToFormattedString(param0: java.io.Serializable): string;
                            public convertToFormattedString(param0: java.util.Date): string;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public convertFromString(param0: string): java.io.Serializable;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.DocumentFile.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class DocumentField extends com.liferay.mobile.screens.ddl.model.Field {
                            public static CREATOR: any;
                            public constructor();
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public isUploading(): boolean;
                            public convertToData(param0: java.io.Serializable): string;
                            public moveToUploadCompleteState(): boolean;
                            public convertFromString(param0: string): com.liferay.mobile.screens.ddl.model.DocumentFile;
                            public convertFromString(param0: string): java.io.Serializable;
                            public moveToUploadInProgressState(): boolean;
                            public isUploadFailed(): boolean;
                            public createLocalFile(param0: string): void;
                            public moveToUploadFailureState(): boolean;
                            public doValidate(): boolean;
                            public convertToFormattedString(param0: com.liferay.mobile.screens.ddl.model.DocumentFile): string;
                            public convertToFormattedString(param0: java.io.Serializable): string;
                            public convertToData(param0: com.liferay.mobile.screens.ddl.model.DocumentFile): string;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public isUploaded(): boolean;
                        }
                        export module DocumentField {
                            export class State {
                                public static IDLE: com.liferay.mobile.screens.ddl.model.DocumentField.State;
                                public static UPLOADING: com.liferay.mobile.screens.ddl.model.DocumentField.State;
                                public static UPLOADED: com.liferay.mobile.screens.ddl.model.DocumentField.State;
                                public static FAILED: com.liferay.mobile.screens.ddl.model.DocumentField.State;
                                public static values(): native.Array<com.liferay.mobile.screens.ddl.model.DocumentField.State>;
                                public static valueOf(param0: string): com.liferay.mobile.screens.ddl.model.DocumentField.State;
                            }
                        }
                    }
                }
            }
        }
    }
}

export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export abstract class DocumentFile {
                            public constructor();
                            public toData(): string;
                            public isValid(): boolean;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class DocumentLocalFile extends com.liferay.mobile.screens.ddl.model.DocumentFile {
                            public constructor();
                            public toData(): string;
                            public constructor(param0: string);
                            public toString(): string;
                            public isValid(): boolean;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class DocumentRemoteFile extends com.liferay.mobile.screens.ddl.model.DocumentFile {
                            public constructor();
                            public toData(): string;
                            public constructor(param0: string);
                            public toString(): string;
                            public isValid(): boolean;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export abstract class Field {
                            public setPredefinedValue(param0: java.io.Serializable): void;
                            public convertToData(param0: java.io.Serializable): string;
                            public hashCode(): number;
                            public getTip(): string;
                            public getLabel(): string;
                            public getCurrentLocale(): java.util.Locale;
                            public getAttributeStringValue(param0: java.util.Map<any, any>, param1: string): string;
                            public convertFromString(param0: string): java.io.Serializable;
                            public isValid(): boolean;
                            public setCurrentStringValue(param0: string): void;
                            public setCurrentValue(param0: java.io.Serializable): void;
                            public describeContents(): number;
                            public convertToFormattedString(param0: java.io.Serializable): string;
                            public getDefaultLocale(): java.util.Locale;
                            public constructor();
                            public toFormattedString(): string;
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public setFields(param0: java.util.List<any>): void;
                            public equals(param0: java.lang.Object): boolean;
                            public getDataType(): com.liferay.mobile.screens.ddl.model.Field.DataType;
                            public getEditorType(): com.liferay.mobile.screens.ddl.model.Field.EditorType;
                            public isRequired(): boolean;
                            public getFields(): java.util.List<any>;
                            public writeToParcel(param0: android.os.Parcel, param1: number): void;
                            public toData(): string;
                            public doValidate(): boolean;
                            public getLastValidationResult(): boolean;
                            public setLastValidationResult(param0: boolean): void;
                            public isReadOnly(): boolean;
                            public isRepeatable(): boolean;
                            public isShowLabel(): boolean;
                            public getName(): string;
                            public getPredefinedValue(): java.io.Serializable;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public getCurrentValue(): java.io.Serializable;
                        }
                        export module Field {
                            export class DataType {
                                public static BOOLEAN: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static STRING: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static HTML: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static DATE: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static NUMBER: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static IMAGE: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static DOCUMENT: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static UNSUPPORTED: com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static valueOf(param0: string): com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static valueOf(param0: java.util.Map<any, any>): com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static valueOfString(param0: string): com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public static values(): native.Array<com.liferay.mobile.screens.ddl.model.Field.DataType>;
                                public createField(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale): com.liferay.mobile.screens.ddl.model.Field;
                                public static valueOf(param0: org.w3c.dom.Element): com.liferay.mobile.screens.ddl.model.Field.DataType;
                                public getValue(): string;
                            }
                            export class EditorType {
                                public static CHECKBOX: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static TEXT: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static TEXT_AREA: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static DATE: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static NUMBER: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static INTEGER: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static DECIMAL: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static SELECT: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static RADIO: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static DOCUMENT: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static UNSUPPORTED: com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static valueOf(param0: string): com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static all(): java.util.List<any>;
                                public static values(): native.Array<com.liferay.mobile.screens.ddl.model.Field.EditorType>;
                                public getValues(): native.Array<string>;
                                public static valueOf(param0: java.util.Map<any, any>): com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public static valueOfString(param0: string): com.liferay.mobile.screens.ddl.model.Field.EditorType;
                                public getValue(): string;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class ImageField extends com.liferay.mobile.screens.ddl.model.StringField {
                            public static CREATOR: any;
                            public constructor();
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class NumberField extends com.liferay.mobile.screens.ddl.model.Field {
                            public static CREATOR: any;
                            public constructor();
                            public convertToData(param0: java.lang.Number): string;
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public convertToData(param0: java.io.Serializable): string;
                            public convertToFormattedString(param0: java.io.Serializable): string;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public convertFromString(param0: string): java.io.Serializable;
                            public convertFromString(param0: string): java.lang.Number;
                            public convertToFormattedString(param0: java.lang.Number): string;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.DDMStructure.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class Record extends com.liferay.mobile.screens.asset.AssetEntry implements com.liferay.mobile.screens.ddl.model.WithDDM {
                            public static CREATOR: any;
                            public static MODEL_VALUES: string;
                            public static MODEL_ATTRIBUTES: string;
                            public getRecordId(): number;
                            public getLocale(): java.util.Locale;
                            public getCreatorUserId(): number;
                            public getValuesAndAttributes(): java.util.Map<any, any>;
                            public setRecordId(param0: number): void;
                            public parseDDMStructure(param0: org.json.JSONObject): void;
                            public describeContents(): number;
                            public getRecordSetId(): number;
                            public setValues(param0: java.util.Map<any, any>): void;
                            public constructor(param0: java.util.Locale);
                            public getModelValues(): java.util.Map<any, any>;
                            public getDDMStructure(): com.liferay.mobile.screens.ddl.model.DDMStructure;
                            public setCreatorUserId(param0: number): void;
                            public constructor();
                            public setValuesAndAttributes(param0: java.util.Map<any, any>): void;
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale);
                            public getData(): java.util.Map<any, any>;
                            public setRecordSetId(param0: number): void;
                            public getServerAttribute(param0: string): java.lang.Object;
                            public getModelAttributes(): java.util.Map<any, any>;
                            public getFields(): java.util.List<any>;
                            public getFieldCount(): number;
                            public writeToParcel(param0: android.os.Parcel, param1: number): void;
                            public getServerValue(param0: string): java.lang.Object;
                            public getFieldByName(param0: string): com.liferay.mobile.screens.ddl.model.Field;
                            public constructor(param0: java.util.Map<any, any>);
                            public setStructureId(param0: number): void;
                            public getField(param0: number): com.liferay.mobile.screens.ddl.model.Field;
                            public refresh(): void;
                            public getStructureId(): number;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public isRecordStructurePresent(): boolean;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class StringField extends com.liferay.mobile.screens.ddl.model.Field {
                            public static CREATOR: any;
                            public constructor();
                            public doValidate(): boolean;
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public convertFromString(param0: string): string;
                            public convertToData(param0: java.io.Serializable): string;
                            public convertToFormattedString(param0: string): string;
                            public convertToFormattedString(param0: java.io.Serializable): string;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public convertFromString(param0: string): java.io.Serializable;
                            public convertToData(param0: string): string;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class StringWithOptionsField extends com.liferay.mobile.screens.ddl.model.Field {
                            public static CREATOR: any;
                            public constructor();
                            public getCurrentValue(): java.util.ArrayList<any>;
                            public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale, param2: java.util.Locale);
                            public convertToData(param0: java.io.Serializable): string;
                            public getAvailableOptions(): java.util.List<any>;
                            public selectOption(param0: com.liferay.mobile.screens.ddl.model.StringWithOptionsField.Option): void;
                            public convertToFormattedString(param0: java.util.ArrayList<any>): string;
                            public isMultiple(): boolean;
                            public convertFromString(param0: string): java.io.Serializable;
                            public findOptionByValue(param0: string): com.liferay.mobile.screens.ddl.model.StringWithOptionsField.Option;
                            public writeToParcel(param0: android.os.Parcel, param1: number): void;
                            public findOptionByLabel(param0: string): com.liferay.mobile.screens.ddl.model.StringWithOptionsField.Option;
                            public doValidate(): boolean;
                            public convertFromString(param0: string): java.util.ArrayList<any>;
                            public convertToFormattedString(param0: java.io.Serializable): string;
                            public clearOption(param0: com.liferay.mobile.screens.ddl.model.StringWithOptionsField.Option): void;
                            public isSelected(param0: com.liferay.mobile.screens.ddl.model.StringWithOptionsField.Option): boolean;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public getCurrentValue(): java.io.Serializable;
                            public convertToData(param0: java.util.ArrayList<any>): string;
                        }
                        export module StringWithOptionsField {
                            export class Option {
                                public label: string;
                                public name: string;
                                public value: string;
                                public constructor(param0: java.util.Map<any, any>);
                                public equals(param0: java.lang.Object): boolean;
                                public constructor();
                                public constructor(param0: string, param1: string, param2: string);
                                public hashCode(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.ddl.model.DDMStructure.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module ddl {
                    export module model {
                        export class WithDDM {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.ddl.model.WithDDM interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                getDDMStructure(): com.liferay.mobile.screens.ddl.model.DDMStructure;
                                parseDDMStructure(param0: org.json.JSONObject): void;
                            });
                            public parseDDMStructure(param0: org.json.JSONObject): void;
                            public getDDMStructure(): com.liferay.mobile.screens.ddl.model.DDMStructure;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.AssetDisplayListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export abstract class BaseFileDisplayScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.asset.display.AssetDisplayListener {
                            public static LOAD_ASSET_ACTION: string;
                            public static STATE_ENTRY_ID: string;
                            public static STATE_FILE_ENTRY: string;
                            public entryId: number;
                            public classPK: number;
                            public className: string;
                            public listener: com.liferay.mobile.screens.asset.display.AssetDisplayListener;
                            public fileEntry: com.liferay.mobile.screens.dlfile.display.FileEntry;
                            public setEntryId(param0: number): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public getEntryId(): number;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public setClassPK(param0: number): void;
                            public getClassName(): string;
                            public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                            public onSaveInstanceState(): android.os.Parcelable;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public setFileEntry(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public setListener(param0: com.liferay.mobile.screens.asset.display.AssetDisplayListener): void;
                            public getClassPK(): number;
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor;
                            public load(): void;
                            public loadFile(): void;
                            public onScreenletAttached(): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public onRestoreInstanceState(param0: android.os.Parcelable): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public setClassName(param0: string): void;
                            public autoLoad(): void;
                            public setAutoLoad(param0: boolean): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.asset.display.interactor.AssetDisplayInteractor, param2: native.Array<java.lang.Object>): void;
                            public loadingFromCache(param0: boolean): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export class BaseFileDisplayViewModel {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.dlfile.display.BaseFileDisplayViewModel interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                showStartOperation(param0: string): void;
                                showFinishOperation(param0: string): void;
                                showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            });
                            public showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                            public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            public showFinishOperation(param0: string): void;
                            public showStartOperation(param0: string): void;
                            public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export class DownloadService {
                            public static FILE_DOWNLOAD_PROGRESS: string;
                            public static REMOTE_PATH: string;
                            public static LOCAL_PATH: string;
                            public static RESULT_RECEIVER: string;
                            public static EXCEPTION: string;
                            public static ERROR_DOWNLOADING: number;
                            public static UPDATE_PROGRESS: number;
                            public static FINISHED_DOWNLOAD: number;
                            public constructor();
                            public onHandleIntent(param0: android.content.Intent): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export class FileEntry extends com.liferay.mobile.screens.asset.AssetEntry {
                            public constructor();
                            public getUrl(): string;
                            public constructor(param0: java.util.Map<any, any>);
                            public getExtension(): string;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public getFileEntry(): java.util.Map<any, any>;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export module audio {
                            export class AudioDisplayScreenlet extends com.liferay.mobile.screens.dlfile.display.BaseFileDisplayScreenlet {
                                public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public constructor(param0: android.content.Context);
                                public loadingFromCache(param0: boolean): void;
                                public storingToCache(param0: java.lang.Object): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export module image {
                            export class ImageDisplayScreenlet extends com.liferay.mobile.screens.dlfile.display.BaseFileDisplayScreenlet {
                                public setScaleType(param0: android.widget.ImageView.ScaleType): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public setPlaceholder(param0: number): void;
                                public getPlaceholderScaleType(): android.widget.ImageView.ScaleType;
                                public constructor(param0: android.content.Context);
                                public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public getPlaceholder(): number;
                                public getScaleType(): android.widget.ImageView.ScaleType;
                                public loadingFromCache(param0: boolean): void;
                                public storingToCache(param0: java.lang.Object): void;
                                public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                                public setPlaceholderScaleType(param0: android.widget.ImageView.ScaleType): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export module image {
                            export class ImageDisplayViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.dlfile.display.image.ImageDisplayViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    setScaleType(param0: android.widget.ImageView.ScaleType): void;
                                    setPlaceholder(param0: number): void;
                                    setPlaceholderScaleType(param0: android.widget.ImageView.ScaleType): void;
                                    showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public setScaleType(param0: android.widget.ImageView.ScaleType): void;
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setPlaceholder(param0: number): void;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showStartOperation(param0: string): void;
                                public showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public setPlaceholderScaleType(param0: android.widget.ImageView.ScaleType): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.pdf.SwipeListener.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export module pdf {
                            export class OnSwipeTouchListener {
                                public constructor(param0: android.content.Context, param1: com.liferay.mobile.screens.dlfile.display.pdf.SwipeListener);
                                public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
                            }
                            export module OnSwipeTouchListener {
                                export class GestureListener {
                                    public onDown(param0: android.view.MotionEvent): boolean;
                                    public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export module pdf {
                            export class PdfDisplayScreenlet extends com.liferay.mobile.screens.dlfile.display.BaseFileDisplayScreenlet {
                                public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public constructor(param0: android.content.Context);
                                public loadingFromCache(param0: boolean): void;
                                public storingToCache(param0: java.lang.Object): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export module pdf {
                            export class SwipeListener {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.dlfile.display.pdf.SwipeListener interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    onSwipeRight(): void;
                                    onSwipeLeft(): void;
                                });
                                public onSwipeRight(): void;
                                public onSwipeLeft(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module dlfile {
                    export module display {
                        export module video {
                            export class VideoDisplayScreenlet extends com.liferay.mobile.screens.dlfile.display.BaseFileDisplayScreenlet {
                                public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public constructor(param0: android.content.Context);
                                public loadingFromCache(param0: boolean): void;
                                public storingToCache(param0: java.lang.Object): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                public onRetrieveAssetSuccess(param0: com.liferay.mobile.screens.asset.AssetEntry): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export abstract class BaseDetailUploadView {
                        public actionName: string;
                        public picturePath: string;
                        public screenletId: number;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public finishActivityAndStartUpload(param0: string, param1: string, param2: string, param3: string): void;
                        public finishActivityAndStartUpload(param0: string, param1: string, param2: string): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public getDescription(): string;
                        public constructor(param0: android.content.Context);
                        public initializeUploadView(param0: string, param1: string, param2: number): void;
                        public getTitle(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export class ImageGalleryListener {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.imagegallery.ImageGalleryListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onImageEntryDeleted(param0: number): void;
                            onImageUploadStarted(param0: string, param1: string, param2: string, param3: string): void;
                            onImageUploadProgress(param0: number, param1: number): void;
                            onImageUploadEnd(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                            showUploadImageView(param0: string, param1: string, param2: number): boolean;
                            provideImageUploadDetailView(): number;
                            onListPageFailed(param0: number, param1: java.lang.Exception): void;
                            onListPageReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            onListItemSelected(param0: java.lang.Object, param1: android.view.View): void;
                            error(param0: java.lang.Exception, param1: string): void;
                        });
                        public onImageEntryDeleted(param0: number): void;
                        public showUploadImageView(param0: string, param1: string, param2: number): boolean;
                        public onListPageFailed(param0: number, param1: java.lang.Exception): void;
                        public onListItemSelected(param0: java.lang.Object, param1: android.view.View): void;
                        public onImageUploadProgress(param0: number, param1: number): void;
                        public onImageUploadEnd(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                        public error(param0: java.lang.Exception, param1: string): void;
                        public onListPageReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                        public onImageUploadStarted(param0: string, param1: string, param2: string, param3: string): void;
                        public provideImageUploadDetailView(): number;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.view.BaseViewModel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.ImageGalleryListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.interactor.load.ImageGalleryLoadInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.view.ImageGalleryViewModel.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export class ImageGalleryScreenlet extends com.liferay.mobile.screens.base.list.BaseListScreenlet implements com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryInteractorListener {
                        public static UPLOAD_IMAGE: string;
                        public loadRows(param0: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor): void;
                        public createInteractor(param0: string): com.liferay.mobile.screens.imagegallery.interactor.load.ImageGalleryLoadInteractor;
                        public onPictureUploadInformationReceived(param0: string, param1: string, param2: string, param3: string): void;
                        public deleteEntry(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                        public load(): void;
                        public getViewModel(): com.liferay.mobile.screens.base.view.BaseViewModel;
                        public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                        public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public constructor(param0: android.content.Context);
                        public deleteEntry(param0: number): void;
                        public getFolderId(): number;
                        public onImageClicked(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry, param1: android.view.View): void;
                        public getRepositoryId(): number;
                        public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                        public deleteCaches(): void;
                        public onImageEntryDeleted(param0: number): void;
                        public startUploadDetail(param0: number, param1: string): void;
                        public getListener(): com.liferay.mobile.screens.base.list.BaseListListener;
                        public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                        public parseMimeTypes(param0: string): native.Array<string>;
                        public onScreenletAttached(): void;
                        public onPicturePathReceived(param0: string): void;
                        public startShadowActivityForMediaStore(param0: number): void;
                        public onPictureUploadProgress(param0: number, param1: number): void;
                        public openCamera(): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                        public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        public loadRows(param0: com.liferay.mobile.screens.imagegallery.interactor.load.ImageGalleryLoadInteractor): void;
                        public loadingFromCache(param0: boolean): void;
                        // public autoLoad(): void;
                        public setFolderId(param0: number): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public openGallery(): void;
                        public getViewModel(): com.liferay.mobile.screens.imagegallery.view.ImageGalleryViewModel;
                        public getListener(): com.liferay.mobile.screens.imagegallery.ImageGalleryListener;
                        public showImageInFullScreenActivity(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                        public storingToCache(param0: java.lang.Object): void;
                        public onPictureUploaded(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                        public error(param0: java.lang.Exception, param1: string): void;
                        public setRepositoryId(param0: number): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        export class ImageGalleryEvent extends com.liferay.mobile.screens.base.list.interactor.ListEvent {
                            public constructor();
                            public setChangeLog(param0: string): void;
                            public setFolderId(param0: number): void;
                            public getModel(): com.liferay.mobile.screens.imagegallery.model.ImageEntry;
                            public getTitle(): string;
                            public constructor(param0: java.lang.Exception);
                            public isStarting(): boolean;
                            public getDescription(): string;
                            public constructor(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry);
                            public getPicturePath(): string;
                            public getChangeLog(): string;
                            public constructor(param0: string, param1: string, param2: string, param3: string);
                            public setImageEntry(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                            public constructor(param0: org.json.JSONObject);
                            public getImageEntry(): com.liferay.mobile.screens.imagegallery.model.ImageEntry;
                            public getModel(): java.lang.Object;
                            public getFolderId(): number;
                            public getListKey(): string;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        export class ImageGalleryInteractorListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryInteractorListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onImageEntryDeleted(param0: number): void;
                                onPicturePathReceived(param0: string): void;
                                onPictureUploaded(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                onPictureUploadProgress(param0: number, param1: number): void;
                                onPictureUploadInformationReceived(param0: string, param1: string, param2: string, param3: string): void;
                                onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                                onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onPictureUploadInformationReceived(param0: string, param1: string, param2: string, param3: string): void;
                            public onPicturePathReceived(param0: string): void;
                            public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public onPictureUploaded(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                            public onPictureUploadProgress(param0: number, param1: number): void;
                            public onImageEntryDeleted(param0: number): void;
                            public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        /*
                    export module delete {
                        export class ImageGalleryDeleteInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                            public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                            public onSuccess(param0: com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent): void;
                            public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public constructor();
                            public onFailure(param0: com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent): void;
                            public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                            public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                            public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public onScreenletDetached(param0: java.lang.Object): void;
                            public execute(param0: com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent): com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent;
                            public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public onScreenletAttached(param0: java.lang.Object): void;
                        }
                    }
                    */
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.ListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.Query.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        export module load {
                            export class ImageGalleryLoadInteractor extends com.liferay.mobile.screens.base.list.interactor.BaseListInteractor {
                                public getPageRowCountRequest(param0: native.Array<java.lang.Object>): java.lang.Integer;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public getPageRowsRequest(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): org.json.JSONArray;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.base.list.interactor.ListEvent;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public validate(param0: number, param1: number): void;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent;
                                public validate(param0: number, param1: number, param2: java.util.Locale): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        export module upload {
                            export class CancelUploadEvent {
                                public constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}

export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        export module upload {
                            export class ImageGalleryProgress {
                                public constructor(param0: number, param1: number);
                                public getTotalBytes(): number;
                                public getTotalBytesSent(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.MediaStoreEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.interactor.upload.ImageGalleryProgress.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        export module upload {
                            export class ImageGalleryUploadInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                public onEventMainThread(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public onSuccess(param0: com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public onFailure(param0: com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent): void;
                                public onEventMainThread(param0: com.liferay.mobile.screens.imagegallery.interactor.upload.ImageGalleryProgress): void;
                                public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public execute(param0: com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent): com.liferay.mobile.screens.imagegallery.interactor.ImageGalleryEvent;
                                public onEventMainThread(param0: com.liferay.mobile.screens.base.MediaStoreEvent): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.interactor.upload.CancelUploadEvent.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module interactor {
                        export module upload {
                            export class ImageGalleryUploadService {
                                public onCreate(): void;
                                public onEvent(param0: com.liferay.mobile.screens.imagegallery.interactor.upload.CancelUploadEvent): void;
                                public onHandleIntent(param0: android.content.Intent): void;
                                public constructor();
                                public onDestroy(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module model {
                        export class ImageEntry extends com.liferay.mobile.screens.asset.AssetEntry {
                            public static CREATOR: any;
                            public constructor();
                            public getImageUrl(): string;
                            public getRepositoryId(): number;
                            public getServerAttribute(param0: string): java.lang.Object;
                            public writeToParcel(param0: android.os.Parcel, param1: number): void;
                            public constructor(param0: number);
                            public getCreatorUserId(): number;
                            public getImage(): android.graphics.Bitmap;
                            public getMimeType(): string;
                            public constructor(param0: java.util.Map<any, any>);
                            public describeContents(): number;
                            public getThumbnailUrl(): string;
                            public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                            public getFolderId(): number;
                            public setImage(param0: android.graphics.Bitmap): void;
                            public getFileEntryId(): number;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module imagegallery {
                    export module view {
                        export class ImageGalleryViewModel {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.imagegallery.view.ImageGalleryViewModel interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                deleteImage(param0: number): void;
                                addImage(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                imageUploadStart(param0: string): void;
                                imageUploadProgress(param0: number, param1: number): void;
                                imageUploadComplete(): void;
                                showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                showStartOperation(param0: string): void;
                                showFinishOperation(param0: string): void;
                                showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            });
                            public imageUploadStart(param0: string): void;
                            public imageUploadComplete(): void;
                            public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            public showFinishOperation(param0: string): void;
                            public showStartOperation(param0: string): void;
                            public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            public addImage(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                            public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                            public deleteImage(param0: number): void;
                            public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            public imageUploadProgress(param0: number, param1: number): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module push {
                    export abstract class AbstractPushReceiver {
                        public getPushServiceClass(): java.lang.Class<any>;
                        public constructor();
                        public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module push {
                    export abstract class AbstractPushService {
                        public constructor();
                        public onHandleIntent(param0: android.content.Intent): void;
                        public processJSONNotification(param0: org.json.JSONObject): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module push {
                    export abstract class PushScreensActivity {
                        public static PUSH_PREFERENCES: string;
                        public static VERSION_CODE: string;
                        public static TOKEN: string;
                        public static USER: string;
                        public constructor();
                        public onSuccess(param0: org.json.JSONObject): void;
                        public onFailure(param0: java.lang.Exception): void;
                        public onPushNotification(param0: org.json.JSONObject): void;
                        public getDefaultSession(): any;
                        public onStop(): void;
                        public isUserAlreadyRegistered(param0: android.content.SharedPreferences): boolean;
                        public getCurrentUser(): string;
                        public onPushNotificationReceived(param0: org.json.JSONObject): void;
                        public registerWithPush(): void;
                        public onErrorRegisteringPush(param0: string, param1: java.lang.Exception): void;
                        public onCreate(param0: android.os.Bundle): void;
                        public getSenderId(): string;
                        public unsubscribeFromBuses(): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export class AssetRating {
                        public setAverage(param0: number): void;
                        public constructor(param0: number, param1: string, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number);
                        public getClassPK(): number;
                        public getClassName(): string;
                        public setClassName(param0: string): void;
                        public setTotalCount(param0: number): void;
                        public getTotalCount(): number;
                        public setUserScore(param0: number): void;
                        public getAverage(): number;
                        public getTotalScore(): number;
                        public setTotalScore(param0: number): void;
                        public setRatings(param0: native.Array<number>): void;
                        public setClassPK(param0: number): void;
                        public getRatings(): native.Array<number>;
                        public getUserScore(): number;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export class RatingListener {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.rating.RatingListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onRatingOperationSuccess(param0: com.liferay.mobile.screens.rating.AssetRating): void;
                            error(param0: java.lang.Exception, param1: string): void;
                        });
                        public error(param0: java.lang.Exception, param1: string): void;
                        public onRatingOperationSuccess(param0: com.liferay.mobile.screens.rating.AssetRating): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.RatingListener.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export class RatingScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.rating.RatingListener {
                        public static LOAD_RATINGS_ACTION: string;
                        public static UPDATE_RATING_ACTION: string;
                        public static DELETE_RATING_ACTION: string;
                        public getListener(): com.liferay.mobile.screens.rating.RatingListener;
                        public load(): void;
                        public getClassPK(): number;
                        public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public getClassName(): string;
                        public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                        public constructor(param0: android.content.Context);
                        public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                        public isEditable(): boolean;
                        public setAutoLoad(param0: boolean): void;
                        public getEntryId(): number;
                        public isAutoLoad(): boolean;
                        public setEntryId(param0: number): void;
                        public onScreenletAttached(): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                        public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        public setClassName(param0: string): void;
                        public loadingFromCache(param0: boolean): void;
                        public autoLoad(): void;
                        public onRatingOperationSuccess(param0: com.liferay.mobile.screens.rating.AssetRating): void;
                        public setListener(param0: com.liferay.mobile.screens.rating.RatingListener): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public enableEdition(param0: boolean): void;
                        public storingToCache(param0: java.lang.Object): void;
                        public error(param0: java.lang.Exception, param1: string): void;
                        public setClassPK(param0: number): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export module interactor {
                        export class RatingEvent extends com.liferay.mobile.screens.base.interactor.event.CacheEvent {
                            public constructor();
                            public getClassName(): string;
                            public constructor(param0: org.json.JSONObject);
                            public constructor(param0: number, param1: string, param2: number, param3: number);
                            public constructor(param0: java.lang.Exception);
                            public getClassPK(): number;
                            public constructor(param0: number, param1: string, param2: number, param3: org.json.JSONObject);
                            public getRatingGroupCounts(): number;
                            public getScore(): number;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.interactor.RatingEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export module interactor {
                        /*
                    export module delete {
                        export class RatingDeleteInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                            public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                            public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public constructor();
                            public onSuccess(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): void;
                            public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                            public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                            public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public onScreenletDetached(param0: java.lang.Object): void;
                            public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                            public toIntArray(param0: org.json.JSONArray): native.Array<number>;
                            public execute(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): com.liferay.mobile.screens.rating.interactor.RatingEvent;
                            public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                            public onFailure(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): void;
                            public onScreenletAttached(param0: java.lang.Object): void;
                        }
                    }
                    */
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.interactor.RatingEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export module interactor {
                        export module load {
                            export class RatingLoadInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.rating.interactor.RatingEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public onSuccess(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): void;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public toIntArray(param0: org.json.JSONArray): native.Array<number>;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onFailure(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.interactor.RatingEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export module interactor {
                        export module update {
                            export class RatingUpdateInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                public validate(param0: number): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public onSuccess(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): void;
                                public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public toIntArray(param0: org.json.JSONArray): native.Array<number>;
                                public execute(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): com.liferay.mobile.screens.rating.interactor.RatingEvent;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onFailure(param0: com.liferay.mobile.screens.rating.interactor.RatingEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module rating {
                    export module view {
                        export class RatingViewModel {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.rating.view.RatingViewModel interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                                enableEdition(param0: boolean): void;
                                getRatingsLength(): number;
                                showStartOperation(param0: string): void;
                                showFinishOperation(param0: string): void;
                                showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            });
                            public showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                            public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            public showFinishOperation(param0: string): void;
                            public enableEdition(param0: boolean): void;
                            public getRatingsLength(): number;
                            public showStartOperation(param0: string): void;
                            public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v62 {
                        export class ScreensassetentryService {
                            public getAssetEntries(param0: number, param1: number, param2: string, param3: string, param4: number): org.json.JSONArray;
                            public constructor(param0: any);
                            public getAssetEntries(param0: any, param1: string): org.json.JSONArray;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v62 {
                        export class ScreensddlrecordService {
                            public getDdlRecordsCount(param0: number): java.lang.Integer;
                            public getDdlRecords(param0: number, param1: string, param2: number, param3: number, param4: any): org.json.JSONArray;
                            public getDdlRecordsCount(param0: number, param1: number): java.lang.Integer;
                            public constructor(param0: any);
                            public getDdlRecord(param0: number, param1: string): org.json.JSONObject;
                            public getDdlRecords(param0: number, param1: number, param2: string, param3: number, param4: number, param5: any): org.json.JSONArray;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v62 {
                        export class ScreensjournalarticleService {
                            public getJournalArticleContent(param0: number, param1: string): string;
                            public getJournalArticleContent(param0: number, param1: number, param2: string): string;
                            public getJournalArticleContent(param0: number, param1: string, param2: number, param3: string): string;
                            public constructor(param0: any);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v62 {
                        export class ScreensuserService {
                            public sendPasswordByEmailAddress(param0: number, param1: string): java.lang.Boolean;
                            public sendPasswordByUserId(param0: number): java.lang.Boolean;
                            public constructor(param0: any);
                            public sendPasswordByScreenName(param0: number, param1: string): java.lang.Boolean;
                            public getCurrentUser(): org.json.JSONObject;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v70 {
                        export class ScreensassetentryService {
                            public getAssetEntries(param0: number, param1: number, param2: string, param3: string, param4: number): org.json.JSONArray;
                            public constructor(param0: any);
                            public getAssetEntry(param0: string, param1: number, param2: string): org.json.JSONObject;
                            public getAssetEntry(param0: number, param1: string): org.json.JSONObject;
                            public getAssetEntries(param0: any, param1: string): org.json.JSONArray;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v70 {
                        export class ScreenscommentService {
                            public getComment(param0: number): org.json.JSONObject;
                            public getComments(param0: string, param1: number, param2: number, param3: number): org.json.JSONArray;
                            public constructor(param0: any);
                            public updateComment(param0: number, param1: string): org.json.JSONObject;
                            public getCommentsCount(param0: string, param1: number): java.lang.Integer;
                            public addComment(param0: string, param1: number, param2: string): org.json.JSONObject;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v70 {
                        export class ScreensddlrecordService {
                            public getDdlRecordsCount(param0: number): java.lang.Integer;
                            public getDdlRecordsCount(param0: number, param1: number): java.lang.Integer;
                            public getDdlRecords(param0: number, param1: string, param2: number, param3: number, param4: any): org.json.JSONArray;
                            public constructor(param0: any);
                            public getDdlRecord(param0: number, param1: string): org.json.JSONObject;
                            public getDdlRecords(param0: number, param1: number, param2: string, param3: number, param4: number, param5: any): org.json.JSONArray;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v70 {
                        export class ScreensjournalarticleService {
                            public getJournalArticleContent(param0: number, param1: string): string;
                            public getJournalArticleContent(param0: number, param1: string, param2: number, param3: string): string;
                            public getJournalArticleContent(param0: number, param1: number, param2: string): string;
                            public constructor(param0: any);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module service {
                    export module v70 {
                        export class ScreensratingsentryService {
                            public updateRatingsEntry(param0: number, param1: string, param2: number, param3: number): org.json.JSONObject;
                            public deleteRatingsEntry(param0: number, param1: string, param2: number): org.json.JSONObject;
                            public constructor(param0: any);
                            public getRatingsEntries(param0: number, param1: number): org.json.JSONObject;
                            public getRatingsEntries(param0: number, param1: string, param2: number): org.json.JSONObject;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export class UserPortraitListener {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.userportrait.UserPortraitListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onUserPortraitLoadReceived(param0: android.graphics.Bitmap): android.graphics.Bitmap;
                            onUserPortraitUploaded(): void;
                            error(param0: java.lang.Exception, param1: string): void;
                        });
                        public error(param0: java.lang.Exception, param1: string): void;
                        public onUserPortraitUploaded(): void;
                        public onUserPortraitLoadReceived(param0: android.graphics.Bitmap): android.graphics.Bitmap;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.userportrait.UserPortraitListener.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export class UserPortraitScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.userportrait.interactor.UserPortraitInteractorListener {
                        public static UPLOAD_PORTRAIT: string;
                        public static LOAD_PORTRAIT: string;
                        public getUuid(): string;
                        public setUuid(param0: string): void;
                        public load(): void;
                        public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                        public constructor(param0: android.content.Context);
                        public setMale(param0: boolean): void;
                        public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                        public setListener(param0: com.liferay.mobile.screens.userportrait.UserPortraitListener): void;
                        public setPortraitId(param0: number): void;
                        public isEditable(): boolean;
                        public onSaveInstanceState(): android.os.Parcelable;
                        public setAutoLoad(param0: boolean): void;
                        public isAutoLoad(): boolean;
                        public isMale(): boolean;
                        public getEditable(): boolean;
                        public onScreenletAttached(): void;
                        public onPicturePathReceived(param0: string): void;
                        public onEndUserPortraitLoadRequest(param0: android.graphics.Bitmap): android.graphics.Bitmap;
                        public openCamera(): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                        public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                        public setEditable(param0: boolean): void;
                        public loadingFromCache(param0: boolean): void;
                        public autoLoad(): void;
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public openGallery(): void;
                        public onUserPortraitUploaded(param0: java.lang.Long): void;
                        public getFilePath(): string;
                        public storingToCache(param0: java.lang.Object): void;
                        public error(param0: java.lang.Exception, param1: string): void;
                        public getPortraitId(): number;
                        public setFilePath(param0: string): void;
                        public onRestoreInstanceState(param0: android.os.Parcelable): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module interactor {
                        export class UserPortraitInteractorListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.userportrait.interactor.UserPortraitInteractorListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onEndUserPortraitLoadRequest(param0: android.graphics.Bitmap): android.graphics.Bitmap;
                                onUserPortraitUploaded(param0: java.lang.Long): void;
                                onPicturePathReceived(param0: string): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public onUserPortraitUploaded(param0: java.lang.Long): void;
                            public onPicturePathReceived(param0: string): void;
                            public error(param0: java.lang.Exception, param1: string): void;
                            public onEndUserPortraitLoadRequest(param0: android.graphics.Bitmap): android.graphics.Bitmap;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module interactor {
                        export class UserPortraitUriBuilder {
                            public constructor();
                            public getUserPortraitUri(param0: string, param1: boolean, param2: number, param3: string): android.net.Uri;
                            public getUserPortraitClient(param0: android.content.Context): any;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module interactor {
                        export module load {
                            export class UserPortraitEvent extends com.liferay.mobile.screens.base.interactor.event.CacheEvent {
                                public constructor(param0: java.lang.Exception);
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.userportrait.interactor.load.UserPortraitEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module interactor {
                        export module load {
                            export class UserPortraitLoadInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.userportrait.interactor.load.UserPortraitEvent;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public onFailure(param0: com.liferay.mobile.screens.userportrait.interactor.load.UserPortraitEvent): void;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public onPrepareLoad(param0: android.graphics.drawable.Drawable): void;
                                public onSuccess(param0: com.liferay.mobile.screens.userportrait.interactor.load.UserPortraitEvent): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onBitmapLoaded(param0: android.graphics.Bitmap, param1: any): void;
                                public onBitmapFailed(param0: android.graphics.drawable.Drawable): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module interactor {
                        export module upload {
                            export class UserPortraitService {
                                public static PORTRAIT_SIZE: number;
                                public static CONNECTION_TIMEOUT: number;
                                public onHandleIntent(param0: android.content.Intent): void;
                                public constructor();
                                public uploadUserPortrait(param0: number, param1: string): org.json.JSONObject;
                                public uploadFromIntent(param0: android.content.Intent): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module interactor {
                        export module upload {
                            export class UserPortraitUploadEvent extends com.liferay.mobile.screens.base.interactor.event.CacheEvent {
                                public constructor(param0: java.lang.Exception);
                                public setPicturePath(param0: string): void;
                                public constructor(param0: string, param1: org.json.JSONObject);
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                                public constructor(param0: string);
                                public getPicturePath(): string;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.MediaStoreEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.event.CacheEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module interactor {
                        export module upload {
                            export class UserPortraitUploadInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheWriteInteractor {
                                public execute(param0: com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent): com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public online(param0: boolean, param1: java.lang.Exception, param2: native.Array<java.lang.Object>): void;
                                public onFailure(param0: com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public constructor();
                                public onEvent(param0: com.liferay.mobile.screens.base.MediaStoreEvent): void;
                                public execute(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.CacheEvent;
                                public online(param0: com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent): void;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public onSuccess(param0: com.liferay.mobile.screens.userportrait.interactor.upload.UserPortraitUploadEvent): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public online(param0: com.liferay.mobile.screens.base.interactor.event.CacheEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module userportrait {
                    export module view {
                        export class UserPortraitViewModel {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.userportrait.view.UserPortraitViewModel interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                showFinishOperation(param0: android.graphics.Bitmap): void;
                                showStartOperation(param0: string): void;
                                showFinishOperation(param0: string): void;
                                showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            });
                            public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                            public showFinishOperation(param0: string): void;
                            public showStartOperation(param0: string): void;
                            public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                            public showFinishOperation(param0: android.graphics.Bitmap): void;
                            public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./de.greenrobot.event.EventBus.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class EventBusUtil {
                        public static getInstance(): any;
                        public static unregister(param0: java.lang.Object): void;
                        public static post(param0: java.lang.Object): void;
                        public static register(param0: java.lang.Object): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class FileUtil {
                        public static createImageFile(): java.io.File;
                        public static getPath(param0: android.content.Context, param1: android.net.Uri): string;
                        public static createFile(param0: string, param1: string, param2: string): java.io.File;
                        public static isGooglePhotosUri(param0: android.net.Uri): boolean;
                        public static getMimeType(param0: string): string;
                        public static createVideoFile(): java.io.File;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class JSONUtil {
                        public static toMap(param0: org.json.JSONObject): java.util.Map<any, any>;
                        public static toList(param0: org.json.JSONArray): java.util.List<any>;
                        public static castToLong(param0: java.lang.Object): java.lang.Long;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.ContextThemeWrapper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class LiferayLocale {
                        public static getDefaultLocale(): java.util.Locale;
                        public static getSupportedLocale(param0: string): string;
                        public static changeLocale(param0: android.view.ContextThemeWrapper, param1: java.util.Locale): void;
                        public static getDefaultSupportedLocale(): string;
                        public static getLocaleWithoutDefault(param0: string): java.util.Locale;
                        public static getSupportedLocaleWithNoDefault(param0: string): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class LiferayLogger {
                        public static d(param0: string): void;
                        public static e(param0: string, param1: java.lang.Exception): void;
                        public static e(param0: string): void;
                        public static i(param0: string): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class LocaleChanged {
                        public constructor(param0: java.util.Locale, param1: java.util.Locale);
                        public getNewLocale(): java.util.Locale;
                        public getOldLocale(): java.util.Locale;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.util.ServiceVersionFactory.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class ServiceProvider {
                        public static getInstance(): com.liferay.mobile.screens.util.ServiceVersionFactory;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.connector.CurrentUserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.connector.UserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DLAppConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class ServiceVersionFactory {
                        /**
                         * Constructs a new instance of the com.liferay.mobile.screens.util.ServiceVersionFactory interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            getUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.UserConnector;
                            getCurrentUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.CurrentUserConnector;
                            getForgotPasswordConnector(param0: any): com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector;
                            getDLAppConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DLAppConnector;
                            getDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector;
                            getScreensDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector;
                            getDDLRecordSetConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector;
                            getDDMStructureConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector;
                            getAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector;
                            getScreensAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector;
                            getJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector;
                            getScreensJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector;
                        });
                        public getDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector;
                        public getJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector;
                        public getScreensDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector;
                        public getCurrentUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.CurrentUserConnector;
                        public getDDLRecordSetConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector;
                        public getAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector;
                        public getScreensAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector;
                        public getUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.UserConnector;
                        public getDLAppConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DLAppConnector;
                        public getScreensJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector;
                        public getForgotPasswordConnector(param0: any): com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector;
                        public getDDMStructureConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.connector.CurrentUserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.connector.UserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DLAppConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class ServiceVersionFactory62 {
                        public getJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector;
                        public constructor();
                        public getScreensDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector;
                        public getCurrentUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.CurrentUserConnector;
                        public getDDLRecordSetConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector;
                        public getUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.UserConnector;
                        public getDLAppConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DLAppConnector;
                        public getScreensJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector;
                        public getForgotPasswordConnector(param0: any): com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector;
                        public getDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector;
                        public getAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector;
                        public getScreensAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector;
                        public getDDMStructureConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.connector.CurrentUserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.login.connector.UserConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.DLAppConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class ServiceVersionFactory70 {
                        public getJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector;
                        public constructor();
                        public getScreensDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.ScreensDDLRecordConnector;
                        public getCurrentUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.CurrentUserConnector;
                        public getDDLRecordSetConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordSetConnector;
                        public getUserConnector(param0: any): com.liferay.mobile.screens.auth.login.connector.UserConnector;
                        public getDLAppConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DLAppConnector;
                        public getScreensJournalContentConnector(param0: any): com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector;
                        public getForgotPasswordConnector(param0: any): com.liferay.mobile.screens.auth.forgotpassword.connector.ForgotPasswordConnector;
                        public getDDLRecordConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDLRecordConnector;
                        public getAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.AssetEntryConnector;
                        public getScreensAssetEntryConnector(param0: any): com.liferay.mobile.screens.asset.list.connector.ScreensAssetEntryConnector;
                        public getDDMStructureConnector(param0: any): com.liferay.mobile.screens.ddl.form.connector.DDMStructureConnector;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module util {
                    export class SquareRelativeLayout {
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                        public constructor(param0: android.content.Context);
                        public onMeasure(param0: number, param1: number): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export class DefaultAnimation {
                            public static showViewWithReveal(param0: android.view.View): void;
                            public static startActivityWithAnimation(param0: android.app.Activity, param1: android.content.Intent): void;
                            public static hideViewWithReveal(param0: android.view.View): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module asset {
                            export module display {
                                export class AssetDisplayView {
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public removeInnerScreenlet(): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public showFinishOperation(param0: android.view.View): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.asset.AssetEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module asset {
                            export module list {
                                export class AssetListAdapter extends com.liferay.mobile.screens.base.list.BaseListAdapter {
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public fillHolder(param0: com.liferay.mobile.screens.asset.AssetEntry, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.asset.list.AssetListAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module asset {
                            export module list {
                                export class AssetListView extends com.liferay.mobile.screens.base.list.BaseListScreenletView implements com.liferay.mobile.screens.asset.list.view.AssetListViewModel {
                                    public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    public onItemClick(param0: number, param1: android.view.View): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public onPageNotFound(param0: number): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                                    public showFinishOperation(param0: string): void;
                                    public showStartOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.viewsets.defaultviews.asset.list.AssetListAdapter;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.ModalProgressBar.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module auth {
                            export module forgotpassword {
                                export class ForgotPasswordView {
                                    public loginEditText: android.widget.EditText;
                                    public progressBar: com.liferay.mobile.screens.base.ModalProgressBar;
                                    public getLoginEditTextDrawableId(): number;
                                    public getLoginEditText(): android.widget.EditText;
                                    public showFinishOperation(param0: boolean): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public getLoginEditTextLabel(): number;
                                    public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                                    public constructor(param0: android.content.Context);
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public refreshLoginEditTextStyle(): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public onClick(param0: android.view.View): void;
                                    public getLogin(): string;
                                    public onAttachedToWindow(): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.Button.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./android.widget.LinearLayout.d.ts" />
/// <reference path="./com.liferay.mobile.screens.auth.BasicAuthMethod.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.ModalProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.AuthenticationType.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module auth {
                            export module login {
                                export class LoginView {
                                    public loginEditText: android.widget.EditText;
                                    public passwordEditText: android.widget.EditText;
                                    public submitButton: android.widget.Button;
                                    public basicAuthenticationLayout: android.widget.LinearLayout;
                                    public oAuthButton: android.widget.Button;
                                    public progressBar: com.liferay.mobile.screens.base.ModalProgressBar;
                                    public getLoginEditTextDrawableId(): number;
                                    public getLoginEditText(): android.widget.EditText;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public getSubmitButton(): android.widget.Button;
                                    public getBasicAuthMethod(): com.liferay.mobile.screens.auth.BasicAuthMethod;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public getAuthenticationType(): com.liferay.mobile.screens.context.AuthenticationType;
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public showFinishOperation(param0: com.liferay.mobile.screens.context.User): void;
                                    public setBasicAuthMethod(param0: com.liferay.mobile.screens.auth.BasicAuthMethod): void;
                                    public constructor(param0: android.content.Context);
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public refreshLoginEditTextStyle(): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public getPassword(): string;
                                    public onClick(param0: android.view.View): void;
                                    public setAuthenticationType(param0: com.liferay.mobile.screens.context.AuthenticationType): void;
                                    public getPasswordEditText(): android.widget.EditText;
                                    public getLogin(): string;
                                    public onAttachedToWindow(): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.ModalProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.context.User.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module auth {
                            export module signup {
                                export class SignUpView {
                                    public emailAddress: android.widget.EditText;
                                    public firstName: android.widget.EditText;
                                    public lastName: android.widget.EditText;
                                    public password: android.widget.EditText;
                                    public progressBar: com.liferay.mobile.screens.base.ModalProgressBar;
                                    public getEmailAddress(): string;
                                    public getFirstName(): string;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public getLastName(): string;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public getMiddleName(): string;
                                    public getScreenName(): string;
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public showFinishOperation(param0: com.liferay.mobile.screens.context.User): void;
                                    public constructor(param0: android.content.Context);
                                    public getJobTitle(): string;
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public getPassword(): string;
                                    public onClick(param0: android.view.View): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.blogs.BlogsEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module blogs {
                            export class BlogsEntryView {
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public constructor(param0: android.content.Context);
                                public showStartOperation(param0: string): void;
                                public onFinishInflate(): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public showFinishOperation(param0: com.liferay.mobile.screens.blogs.BlogsEntry): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module comment {
                            export module add {
                                export class CommentAddView {
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public onClick(param0: android.view.View): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module comment {
                            export module display {
                                export class CommentDisplayView {
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public showFinishOperation(param0: string, param1: boolean): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public showFinishOperation(param0: string, param1: boolean, param2: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    public showFinishOperation(param0: string): void;
                                    public showStartOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public onClick(param0: android.view.View): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.display.CommentDisplayListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.comment.list.CommentListAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module comment {
                            export module list {
                                export class CommentListAdapter extends com.liferay.mobile.screens.base.list.BaseListAdapter {
                                    public fillHolder(param0: com.liferay.mobile.screens.comment.CommentEntry, param1: com.liferay.mobile.screens.viewsets.defaultviews.comment.list.CommentListAdapter.CommentViewHolder): void;
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    public setEditable(param0: boolean): void;
                                    public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener, param3: com.liferay.mobile.screens.comment.display.CommentDisplayListener);
                                    public onViewAttachedToWindow(param0: com.liferay.mobile.screens.viewsets.defaultviews.comment.list.CommentListAdapter.CommentViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.viewsets.defaultviews.comment.list.CommentListAdapter.CommentViewHolder;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                                }
                                export module CommentListAdapter {
                                    export class CommentViewHolder extends com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder {
                                        public constructor(param0: com.liferay.mobile.screens.viewsets.defaultviews.comment.list.CommentListAdapter, param1: android.view.View, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                        public bind(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                        public constructor(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                        public loadDisplayScreenlet(): void;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.comment.CommentEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.comment.list.CommentListAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module comment {
                            export module list {
                                export class CommentListView extends com.liferay.mobile.screens.base.list.BaseListScreenletView implements com.liferay.mobile.screens.comment.list.view.CommentListViewModel, com.liferay.mobile.screens.comment.display.CommentDisplayListener {
                                    public onUpdateCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    public onItemClick(param0: number, param1: android.view.View): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public addNewCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    public error(param0: java.lang.Exception, param1: string): void;
                                    public removeCommentEntry(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public onLoadCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    public onPageNotFound(param0: number): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                                    public showFinishOperation(param0: string): void;
                                    public showStartOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.viewsets.defaultviews.comment.list.CommentListAdapter;
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public allowEdition(param0: boolean): void;
                                    public getItemLayoutId(): number;
                                    public onDeleteCommentSuccess(param0: com.liferay.mobile.screens.comment.CommentEntry): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Button.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.form.DDLFormScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export class DDLFormView {
                                    public progressBar: android.widget.ProgressBar;
                                    public loadingFormProgressBar: android.widget.ProgressBar;
                                    public fieldsContainerView: android.view.ViewGroup;
                                    public submitButton: android.widget.Button;
                                    public setCustomFieldLayoutId(param0: string, param1: number): void;
                                    public showStartOperation(param0: string, param1: java.lang.Object): void;
                                    public showFormFields(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                    public showValidationResults(param0: java.util.Map<any, any>, param1: boolean): void;
                                    public getFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): number;
                                    public clearFormFields(): void;
                                    public showFinishOperation(param0: string): void;
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public onClick(param0: android.view.View): void;
                                    public showRecordValues(): void;
                                    public showFinishOperation(param0: string, param1: java.lang.Object): void;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception, param2: java.lang.Object): void;
                                    public resetCustomFieldLayoutId(param0: string): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public getCustomFieldLayoutId(param0: string): number;
                                    public setFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType, param1: number): void;
                                    public resetFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): void;
                                    public showStartOperation(param0: string): void;
                                    public getDDLFormScreenlet(): com.liferay.mobile.screens.ddl.form.DDLFormScreenlet;
                                    public constructor(param0: android.content.Context);
                                    public addFieldView(param0: com.liferay.mobile.screens.ddl.model.Field, param1: number): void;
                                    public hideProgressBar(param0: string): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export abstract class BaseDDLFieldTextView {
                                        public labelTextView: android.widget.TextView;
                                        public textEditText: android.widget.EditText;
                                        public parentView: android.view.View;
                                        public onPostValidation(param0: boolean): void;
                                        public refresh(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public getLabelTextView(): android.widget.TextView;
                                        public onFinishInflate(): void;
                                        public onTextChanged(param0: string): void;
                                        public afterTextChanged(param0: android.text.Editable): void;
                                        public getTextEditText(): android.widget.EditText;
                                        public constructor(param0: android.content.Context);
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                                        public setParentView(param0: android.view.View): void;
                                        public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                                        public setPositionInParent(param0: number): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.RatingBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.NumberField.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class CustomRatingNumberView {
                                        public field: com.liferay.mobile.screens.ddl.model.NumberField;
                                        public ratingBar: android.widget.RatingBar;
                                        public parentView: android.view.View;
                                        public onPostValidation(param0: boolean): void;
                                        public refresh(): void;
                                        public onFinishInflate(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public onRatingChanged(param0: android.widget.RatingBar, param1: number, param2: boolean): void;
                                        public constructor(param0: android.content.Context);
                                        public getField(): com.liferay.mobile.screens.ddl.model.NumberField;
                                        public valueToRating(param0: number): number;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public setParentView(param0: android.view.View): void;
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.NumberField): void;
                                        public setPositionInParent(param0: number): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public ratingToValue(param0: number): number;
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class DDLDocumentFieldView extends com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.fields.BaseDDLFieldTextView implements com.liferay.mobile.screens.ddl.form.view.DDLFieldViewModel {
                                        public progressBar: android.widget.ProgressBar;
                                        public choseOriginDialog: android.app.AlertDialog;
                                        public fileDialog: android.app.AlertDialog;
                                        public onPostValidation(param0: boolean): void;
                                        public refresh(): void;
                                        public onFinishInflate(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public onTextChanged(param0: string): void;
                                        public getProgressBar(): android.widget.ProgressBar;
                                        public onDetachedFromWindow(): void;
                                        public constructor(param0: android.content.Context);
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public onClick(param0: android.view.View): void;
                                        public createOriginDialog(): android.app.AlertDialog;
                                        public setParentView(param0: android.view.View): void;
                                        public setPositionInParent(param0: number): void;
                                        public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.widget.SwitchCompat.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.CompoundButton.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.BooleanField.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class DDLFieldCheckboxView {
                                        public field: com.liferay.mobile.screens.ddl.model.BooleanField;
                                        public switchCompat: android.support.v7.widget.SwitchCompat;
                                        public parentView: android.view.View;
                                        public onPostValidation(param0: boolean): void;
                                        public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
                                        public refresh(): void;
                                        public onFinishInflate(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public getField(): com.liferay.mobile.screens.ddl.model.BooleanField;
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.BooleanField): void;
                                        public constructor(param0: android.content.Context);
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public setParentView(param0: android.view.View): void;
                                        public setPositionInParent(param0: number): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.DatePickerDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.DatePicker.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class DDLFieldDateView extends com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.fields.BaseDDLFieldTextView {
                                        public pickerDialog: android.app.DatePickerDialog;
                                        public onDateSet(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
                                        public onPostValidation(param0: boolean): void;
                                        public getDatePickerStyle(): number;
                                        public refresh(): void;
                                        public onFinishInflate(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public onTextChanged(param0: string): void;
                                        public onDetachedFromWindow(): void;
                                        public constructor(param0: android.content.Context);
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public onClick(param0: android.view.View): void;
                                        public setParentView(param0: android.view.View): void;
                                        public setPositionInParent(param0: number): void;
                                        public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.NumberField.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class DDLFieldNumberView extends com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.fields.BaseDDLFieldTextView {
                                        public onPostValidation(param0: boolean): void;
                                        public refresh(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public onTextChanged(param0: string): void;
                                        public constructor(param0: android.content.Context);
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public setParentView(param0: android.view.View): void;
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.NumberField): void;
                                        public setPositionInParent(param0: number): void;
                                        public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.CompoundButton.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.StringWithOptionsField.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class DDLFieldRadioView {
                                        public parentView: android.view.View;
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.StringWithOptionsField): void;
                                        public onPostValidation(param0: boolean): void;
                                        public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
                                        public refresh(): void;
                                        public onFinishInflate(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public getField(): com.liferay.mobile.screens.ddl.model.StringWithOptionsField;
                                        public constructor(param0: android.content.Context);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public setParentView(param0: android.view.View): void;
                                        public setPositionInParent(param0: number): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class DDLFieldSelectView extends com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.fields.BaseDDLFieldTextView {
                                        public alertDialog: android.app.AlertDialog;
                                        public onPostValidation(param0: boolean): void;
                                        public createAlertDialog(): void;
                                        public refresh(): void;
                                        public onFinishInflate(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public onTextChanged(param0: string): void;
                                        public onDetachedFromWindow(): void;
                                        public constructor(param0: android.content.Context);
                                        public getOptionsLabels(): java.util.List<any>;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public onClick(param0: android.view.View): void;
                                        public setParentView(param0: android.view.View): void;
                                        public setPositionInParent(param0: number): void;
                                        public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                                        public getAlertDialogListener(): android.content.DialogInterface.OnClickListener;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Field.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class DDLFieldTextView extends com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.fields.BaseDDLFieldTextView {
                                        public constructor(param0: android.content.Context);
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                        public setField(param0: com.liferay.mobile.screens.ddl.model.Field): void;
                                        public onPostValidation(param0: boolean): void;
                                        public refresh(): void;
                                        public getField(): com.liferay.mobile.screens.ddl.model.Field;
                                        public setParentView(param0: android.view.View): void;
                                        public setPositionInParent(param0: number): void;
                                        public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                                        public onTextChanged(param0: string): void;
                                        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                        public getParentView(): android.view.View;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module form {
                                export module fields {
                                    export class SelectFileDialog {
                                        public createDialog(param0: android.content.Context, param1: com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.fields.SelectFileDialog.SimpleFileDialogListener): android.app.AlertDialog;
                                        public static checkIfDirExists(param0: string): string;
                                        public constructor();
                                    }
                                    export module SelectFileDialog {
                                        export class SimpleFileDialogListener {
                                            /**
                                             * Constructs a new instance of the com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.fields.SelectFileDialog$SimpleFileDialogListener interface with the provided implementation.
                                             */
                                            public constructor(implementation: {
                                                onFileChosen(param0: string): void;
                                            });
                                            public onFileChosen(param0: string): void;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module list {
                                export class DDLListAdapter extends com.liferay.mobile.screens.base.list.BaseListAdapter {
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    public fillHolder(param0: com.liferay.mobile.screens.ddl.model.Record, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.ddl.list.DDLListAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module list {
                                export class DDLListView extends com.liferay.mobile.screens.base.list.BaseListScreenletView implements com.liferay.mobile.screens.ddl.list.view.DDLListViewModel {
                                    public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    public onItemClick(param0: number, param1: android.view.View): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public onPageNotFound(param0: number): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                                    public showFinishOperation(param0: string): void;
                                    public showStartOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.viewsets.defaultviews.ddl.list.DDLListAdapter;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module list {
                                export class DividerItemDecoration {
                                    public constructor(param0: android.graphics.drawable.Drawable);
                                    public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: any, param3: any): void;
                                    public onDrawOver(param0: android.graphics.Canvas, param1: any, param2: any): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.Record.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module pager {
                                export class DDLFormPagerView extends com.liferay.mobile.screens.viewsets.defaultviews.ddl.form.DDLFormView {
                                    public setCustomFieldLayoutId(param0: string, param1: number): void;
                                    public showFormFields(param0: com.liferay.mobile.screens.ddl.model.Record): void;
                                    public showStartOperation(param0: string, param1: java.lang.Object): void;
                                    public showFinishOperation(param0: string, param1: java.lang.Object): void;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception, param2: java.lang.Object): void;
                                    public resetCustomFieldLayoutId(param0: string): void;
                                    public showValidationResults(param0: java.util.Map<any, any>, param1: boolean): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getCustomFieldLayoutId(param0: string): number;
                                    public setFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType, param1: number): void;
                                    public getFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): number;
                                    public resetFieldLayoutId(param0: com.liferay.mobile.screens.ddl.model.Field.EditorType): void;
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module ddl {
                            export module pager {
                                export class DDLFormPagerViewAdapter {
                                    public getCount(): number;
                                    public isViewFromObject(param0: android.view.View, param1: java.lang.Object): boolean;
                                    public destroyItem(param0: android.view.ViewGroup, param1: number, param2: java.lang.Object): void;
                                    public instantiateItem(param0: android.view.ViewGroup, param1: number): java.lang.Object;
                                    public constructor(param0: java.util.List<any>, param1: java.util.Map<any, any>);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module dlfile {
                            export module display {
                                export class AudioDisplayView extends com.liferay.mobile.screens.viewsets.defaultviews.dlfile.display.BaseFileDisplayView {
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public loadFileEntry(param0: string): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module dlfile {
                            export module display {
                                export abstract class BaseFileDisplayView {
                                    public fileEntry: com.liferay.mobile.screens.dlfile.display.FileEntry;
                                    public screenlet: com.liferay.mobile.screens.base.BaseScreenlet;
                                    public progressBar: android.widget.ProgressBar;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public loadFileEntry(param0: string): void;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public renderDownloadProgress(param0: number): void;
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onFinishInflate(): void;
                                }
                                export module BaseFileDisplayView {
                                    export class DownloadReceiver {
                                        public onReceiveResult(param0: number, param1: android.os.Bundle): void;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module dlfile {
                            export module display {
                                export class ImageDisplayView extends com.liferay.mobile.screens.viewsets.defaultviews.dlfile.display.BaseFileDisplayView implements com.liferay.mobile.screens.dlfile.display.image.ImageDisplayViewModel {
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public onError(): void;
                                    public loadFileEntry(param0: string): void;
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public setPlaceholder(param0: number): void;
                                    public setScaleType(param0: android.widget.ImageView.ScaleType): void;
                                    public showFinishOperation(param0: string): void;
                                    public showStartOperation(param0: string): void;
                                    public setPlaceholderScaleType(param0: android.widget.ImageView.ScaleType): void;
                                    public constructor(param0: android.content.Context);
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onSuccess(): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module dlfile {
                            export module display {
                                export class PdfDisplayView extends com.liferay.mobile.screens.viewsets.defaultviews.dlfile.display.BaseFileDisplayView {
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public loadFileEntry(param0: string): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                    public onClick(param0: android.view.View): void;
                                    public renderDownloadProgress(param0: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.dlfile.display.FileEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module dlfile {
                            export module display {
                                export class VideoDisplayView extends com.liferay.mobile.screens.viewsets.defaultviews.dlfile.display.BaseFileDisplayView {
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public loadFileEntry(param0: string): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public showFinishOperation(param0: com.liferay.mobile.screens.dlfile.display.FileEntry): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export abstract class BaseImageGalleryView extends com.liferay.mobile.screens.base.list.BaseListScreenletView implements com.liferay.mobile.screens.imagegallery.view.ImageGalleryViewModel {
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public onPageNotFound(param0: number): void;
                                public constructor(param0: android.content.Context);
                                public showStartOperation(param0: string): void;
                                public imageUploadProgress(param0: number, param1: number): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                public imageUploadStart(param0: string): void;
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public addImage(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public openMediaSelector(): void;
                                public imageUploadComplete(): void;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                public deleteImage(param0: number): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public onItemClick(param0: number, param1: android.view.View): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export class DefaultUploadDetailView extends com.liferay.mobile.screens.imagegallery.BaseDetailUploadView {
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public getTitle(): string;
                                public constructor(param0: android.content.Context);
                                public getDescription(): string;
                                public onFinishInflate(): void;
                                public initializeUploadView(param0: string, param1: string, param2: number): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.BaseDetailUploadView.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export class DefaultUploadDialog {
                                public constructor();
                                public createDialog(param0: com.liferay.mobile.screens.imagegallery.BaseDetailUploadView, param1: android.content.Context): android.app.AlertDialog;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export class DetailImageActivity {
                                public static GALLERY_SCREENLET_IMAGE_DETAILED: string;
                                public constructor();
                                public onCreate(param0: android.os.Bundle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export class UploadProgressView {
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public addUpload(param0: string): void;
                                public uploadCompleteOrError(): void;
                                public onAttachedToWindow(): void;
                                public constructor(param0: android.content.Context);
                                public hide(): void;
                                public onClick(param0: android.view.View): void;
                                public setProgress(param0: number): void;
                                public setImage(param0: string): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module grid {
                                export class GridDividerItemDecoration extends com.liferay.mobile.screens.viewsets.defaultviews.ddl.list.DividerItemDecoration {
                                    public constructor(param0: android.graphics.drawable.Drawable);
                                    public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: any, param3: any): void;
                                    public constructor(param0: number);
                                    public onDrawOver(param0: android.graphics.Canvas, param1: any, param2: any): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.grid.GridImageGalleryAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module grid {
                                export class GridImageGalleryAdapter extends com.liferay.mobile.screens.base.list.BaseListAdapter {
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    public fillHolder(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry, param1: com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.grid.GridImageGalleryAdapter.GridGalleryViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.grid.GridImageGalleryAdapter.GridGalleryViewHolder;
                                    public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                                }
                                export module GridImageGalleryAdapter {
                                    export class GridGalleryViewHolder extends com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder {
                                        public bind(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                        public constructor(param0: com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.grid.GridImageGalleryAdapter, param1: android.view.View, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                        public constructor(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.ddl.list.DividerItemDecoration.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.grid.GridImageGalleryAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module grid {
                                export class GridImageGalleryView extends com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.BaseImageGalleryView {
                                    public static COLUMNS_SIZE: number;
                                    public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    public onItemClick(param0: number, param1: android.view.View): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public getDividerDecoration(): com.liferay.mobile.screens.viewsets.defaultviews.ddl.list.DividerItemDecoration;
                                    public imageUploadStart(param0: string): void;
                                    public addImage(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                    public deleteImage(param0: number): void;
                                    public onPageNotFound(param0: number): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                                    public reloadView(): void;
                                    public showFinishOperation(param0: string): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.grid.GridImageGalleryAdapter;
                                    public constructor(param0: android.content.Context);
                                    public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public onClick(param0: android.view.View): void;
                                    public getDividerDecoration(): any;
                                    public getItemProgressLayoutId(): number;
                                    public getItemLayoutId(): number;
                                    public imageUploadProgress(param0: number, param1: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public imageUploadComplete(): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.list.ListImageGalleryAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module list {
                                export class ListImageGalleryAdapter extends com.liferay.mobile.screens.base.list.BaseListAdapter {
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    public fillHolder(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry, param1: com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.list.ListImageGalleryAdapter.ListGalleryViewHolder): void;
                                    public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.list.ListImageGalleryAdapter.ListGalleryViewHolder;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                                }
                                export module ListImageGalleryAdapter {
                                    export class ListGalleryViewHolder extends com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder {
                                        public bind(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                        public constructor(param0: com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.list.ListImageGalleryAdapter, param1: android.view.View, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                        public constructor(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.list.ListImageGalleryAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module list {
                                export class ListImageGalleryView extends com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.BaseImageGalleryView {
                                    public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    public onItemClick(param0: number, param1: android.view.View): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public imageUploadStart(param0: string): void;
                                    public addImage(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                    public deleteImage(param0: number): void;
                                    public onPageNotFound(param0: number): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public onClick(param0: android.view.View): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.list.ListImageGalleryAdapter;
                                    public getItemLayoutId(): number;
                                    public imageUploadProgress(param0: number, param1: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public imageUploadComplete(): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.slideshow.SlideshowImageGalleryAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module slideshow {
                                export class SlideshowImageGalleryAdapter extends com.liferay.mobile.screens.base.list.BaseListAdapter {
                                    public static RESIZED_WIDTH: number;
                                    public static RESIZED_HEIGHT: number;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.slideshow.SlideshowImageGalleryAdapter.SlideshowGalleryViewHolder;
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public fillHolder(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry, param1: com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.slideshow.SlideshowImageGalleryAdapter.SlideshowGalleryViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                                }
                                export module SlideshowImageGalleryAdapter {
                                    export class SlideshowGalleryViewHolder extends com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder {
                                        public bind(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                        public constructor(param0: com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.slideshow.SlideshowImageGalleryAdapter, param1: android.view.View, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                        public constructor(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.imagegallery.model.ImageEntry.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.ddl.list.DividerItemDecoration.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.slideshow.SlideshowImageGalleryAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module slideshow {
                                export class SlideshowImageGalleryView extends com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.BaseImageGalleryView {
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.viewsets.defaultviews.imagegallery.slideshow.SlideshowImageGalleryAdapter;
                                    public transformViews(param0: any): void;
                                    public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    public onItemClick(param0: number, param1: android.view.View): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public getDividerDecoration(): com.liferay.mobile.screens.viewsets.defaultviews.ddl.list.DividerItemDecoration;
                                    public imageUploadStart(param0: string): void;
                                    public addImage(param0: com.liferay.mobile.screens.imagegallery.model.ImageEntry): void;
                                    public deleteImage(param0: number): void;
                                    public onPageNotFound(param0: number): void;
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public getDividerDecoration(): any;
                                    public getItemProgressLayoutId(): number;
                                    public getItemLayoutId(): number;
                                    public imageUploadProgress(param0: number, param1: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public imageUploadComplete(): void;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module imagegallery {
                            export module slideshow {
                                export class SlideshowLayout {
                                    public constructor(param0: any);
                                    public onScrolled(param0: any, param1: number, param2: number): void;
                                    public onLayoutChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module rating {
                            export abstract class BaseRatingView {
                                public progressBar: android.widget.ProgressBar;
                                public content: android.view.ViewGroup;
                                public views: java.util.List<any>;
                                public labels: java.util.List<any>;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public clicked(param0: number, param1: number): void;
                                public constructor(param0: android.content.Context);
                                public showStartOperation(param0: string): void;
                                public setButton(param0: android.view.View): void;
                                public showFinishOperation(param0: string): void;
                                public getRatingsLength(): number;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public setEmptyState(param0: android.widget.TextView, param1: android.view.View, param2: number, param3: com.liferay.mobile.screens.rating.AssetRating): void;
                                public showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public onClick(param0: android.view.View): void;
                                public onFinishInflate(): void;
                                public enableEdition(param0: boolean): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module rating {
                            export class EmojisRatingView extends com.liferay.mobile.screens.viewsets.defaultviews.rating.BaseRatingView {
                                public static EMOJIS: native.Array<string>;
                                public showFinishOperation(param0: string): void;
                                public getRatingsLength(): number;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public clicked(param0: number, param1: number): void;
                                public setEmptyState(param0: android.widget.TextView, param1: android.view.View, param2: number, param3: com.liferay.mobile.screens.rating.AssetRating): void;
                                public showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                                public constructor(param0: android.content.Context);
                                public setButton(param0: android.view.View): void;
                                public enableEdition(param0: boolean): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module rating {
                            export class LikeRatingView extends com.liferay.mobile.screens.viewsets.defaultviews.rating.BaseRatingView {
                                public showFinishOperation(param0: string): void;
                                public getRatingsLength(): number;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public clicked(param0: number, param1: number): void;
                                public setEmptyState(param0: android.widget.TextView, param1: android.view.View, param2: number, param3: com.liferay.mobile.screens.rating.AssetRating): void;
                                public showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                                public constructor(param0: android.content.Context);
                                public setButton(param0: android.view.View): void;
                                public enableEdition(param0: boolean): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module rating {
                            export class ReactionsRatingView extends com.liferay.mobile.screens.viewsets.defaultviews.rating.BaseRatingView {
                                public showFinishOperation(param0: string): void;
                                public getRatingsLength(): number;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public clicked(param0: number, param1: number): void;
                                public setEmptyState(param0: android.widget.TextView, param1: android.view.View, param2: number, param3: com.liferay.mobile.screens.rating.AssetRating): void;
                                public showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                                public constructor(param0: android.content.Context);
                                public setButton(param0: android.view.View): void;
                                public enableEdition(param0: boolean): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.RatingBar.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module rating {
                            export class StarsRatingView extends com.liferay.mobile.screens.viewsets.defaultviews.rating.BaseRatingView {
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public clicked(param0: number, param1: number): void;
                                public constructor(param0: android.content.Context);
                                public setButton(param0: android.view.View): void;
                                public onRatingChanged(param0: android.widget.RatingBar, param1: number, param2: boolean): void;
                                public showFinishOperation(param0: string): void;
                                public getRatingsLength(): number;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public setEmptyState(param0: android.widget.TextView, param1: android.view.View, param2: number, param3: com.liferay.mobile.screens.rating.AssetRating): void;
                                public showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                                public enableEdition(param0: boolean): void;
                                public onFinishInflate(): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liferay.mobile.screens.rating.AssetRating.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module rating {
                            export class ThumbsRatingView extends com.liferay.mobile.screens.viewsets.defaultviews.rating.BaseRatingView {
                                public showFinishOperation(param0: string): void;
                                public getRatingsLength(): number;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                public clicked(param0: number, param1: number): void;
                                public setEmptyState(param0: android.widget.TextView, param1: android.view.View, param2: number, param3: com.liferay.mobile.screens.rating.AssetRating): void;
                                public showFinishOperation(param0: string, param1: com.liferay.mobile.screens.rating.AssetRating): void;
                                public constructor(param0: android.content.Context);
                                public setButton(param0: android.view.View): void;
                                public enableEdition(param0: boolean): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageButton.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./rx.functions.Action1.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module userportrait {
                            export class UserPortraitView {
                                public portraitImage: android.widget.ImageView;
                                public portraitAddButton: android.widget.ImageButton;
                                public portraitProgress: android.widget.ProgressBar;
                                public choseOriginDialog: android.app.AlertDialog;
                                public getBorderRadius(): number;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                public transformBitmap(param0: android.graphics.Bitmap): android.graphics.Bitmap;
                                public constructor(param0: android.content.Context);
                                public showStartOperation(param0: string): void;
                                public getRectF(param0: android.graphics.Bitmap, param1: number): android.graphics.RectF;
                                public showFinishOperation(param0: android.graphics.Bitmap): void;
                                public openGallery(): rx.functions.Action1;
                                public getDefaultBorderColor(): number;
                                public onDetachedFromWindow(): void;
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public getBorderPaint(param0: number, param1: number): android.graphics.Paint;
                                public getPaint(param0: android.graphics.Bitmap): android.graphics.Paint;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public onAttachedToWindow(): void;
                                public getBorderWidth(): number;
                                public onClick(param0: android.view.View): void;
                                public onFinishInflate(): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                public openCamera(): rx.functions.Action1;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.WebContent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module webcontent {
                            export module display {
                                export class WebContentDisplayView {
                                    public webView: android.webkit.WebView;
                                    public progressBar: android.widget.ProgressBar;
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFinishOperation(param0: com.liferay.mobile.screens.webcontent.WebContent): void;
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public onAttachedToWindow(): void;
                                    public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.WebContent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module webcontent {
                            export module display {
                                export class WebContentStructuredDisplayView {
                                    public showStartOperation(param0: string): void;
                                    public showFinishOperation(param0: string): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFinishOperation(param0: com.liferay.mobile.screens.webcontent.WebContent): void;
                                    public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    public getValueFromLabelFields(param0: com.liferay.mobile.screens.webcontent.WebContent): string;
                                    public onFinishInflate(): void;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapterListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.webcontent.list.WebContentListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.WebContent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module webcontent {
                            export module list {
                                export class WebContentListAdapter extends com.liferay.mobile.screens.base.list.BaseListAdapter {
                                    public constructor(param0: number, param1: number, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    public fillHolder(param0: java.lang.Object, param1: com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder): void;
                                    public calculateValue(param0: com.liferay.mobile.screens.webcontent.WebContent): string;
                                    public fillHolder(param0: com.liferay.mobile.screens.webcontent.WebContent, param1: com.liferay.mobile.screens.viewsets.defaultviews.webcontent.list.WebContentListAdapter.ViewHolder): void;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.viewsets.defaultviews.webcontent.list.WebContentListAdapter.ViewHolder;
                                    public createViewHolder(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener): com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder;
                                }
                                export module WebContentListAdapter {
                                    export class ViewHolder extends com.liferay.mobile.screens.base.list.BaseListAdapter.ViewHolder {
                                        public constructor(param0: com.liferay.mobile.screens.viewsets.defaultviews.webcontent.list.WebContentListAdapter, param1: android.view.View, param2: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                        public constructor(param0: android.view.View, param1: com.liferay.mobile.screens.base.list.BaseListAdapterListener);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.BaseListAdapter.d.ts" />
/// <reference path="./com.liferay.mobile.screens.viewsets.defaultviews.webcontent.list.WebContentListAdapter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module viewsets {
                    export module defaultviews {
                        export module webcontent {
                            export module list {
                                export class WebContentListView extends com.liferay.mobile.screens.base.list.BaseListScreenletView {
                                    public showFinishOperation(param0: string): void;
                                    public showFinishOperation(param0: number, param1: number, param2: java.lang.Exception): void;
                                    public onItemClick(param0: number, param1: android.view.View): void;
                                    public constructor(param0: android.content.Context);
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                                    public showFinishOperation(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.viewsets.defaultviews.webcontent.list.WebContentListAdapter;
                                    public onPageNotFound(param0: number): void;
                                    public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                                    public createListAdapter(param0: number, param1: number): com.liferay.mobile.screens.base.list.BaseListAdapter;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.liferay.mobile.screens.ddl.model.DDMStructure.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export class WebContent extends com.liferay.mobile.screens.asset.AssetEntry implements com.liferay.mobile.screens.ddl.model.WithDDM {
                        public static CREATOR: any;
                        public static DDM_STRUCTURE: string;
                        public getArticleId(): string;
                        public constructor();
                        public describeContents(): number;
                        public setHtml(param0: string): void;
                        public constructor(param0: java.util.Map<any, any>);
                        public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
                        public getLocalized(param0: string): string;
                        public getTitle(): string;
                        public parseDDMStructure(param0: org.json.JSONObject): void;
                        public writeToParcel(param0: android.os.Parcel, param1: number): void;
                        public getDDMStructure(): com.liferay.mobile.screens.ddl.model.DDMStructure;
                        public getHtml(): string;
                        public constructor(param0: java.util.Map<any, any>, param1: java.util.Locale);
                        public constructor(param0: string);
                    }
                }
            }
        }
    }
}

/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.WebContent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export class WebContentDisplayListener {
                            /**
                             * Constructs a new instance of the com.liferay.mobile.screens.webcontent.display.WebContentDisplayListener interface with the provided implementation.
                             */
                            public constructor(implementation: {
                                onWebContentReceived(param0: com.liferay.mobile.screens.webcontent.WebContent): com.liferay.mobile.screens.webcontent.WebContent;
                                // onWebContentClicked(param0: any; param1: android.view.MotionEvent): void;
                                error(param0: java.lang.Exception, param1: string): void;
                            });
                            public error(param0: java.lang.Exception, param1: string): void;
                            public onWebContentReceived(param0: com.liferay.mobile.screens.webcontent.WebContent): com.liferay.mobile.screens.webcontent.WebContent;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.WebContent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.WebContentDisplayListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayBaseInteractor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export class WebContentDisplayScreenlet extends com.liferay.mobile.screens.base.BaseScreenlet implements com.liferay.mobile.screens.webcontent.display.WebContentDisplayListener {
                            public static WEB_CONTENT_BY_ARTICLE_ID: string;
                            public static WEB_CONTENT_WITH_STRUCTURE: string;
                            public setJavascriptEnabled(param0: boolean): void;
                            public getArticleId(): string;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public error(param0: java.lang.Exception, param1: string): void;
                            public getLabelFields(): string;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayBaseInteractor, param2: native.Array<java.lang.Object>): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public onWebContentReceived(param0: com.liferay.mobile.screens.webcontent.WebContent): com.liferay.mobile.screens.webcontent.WebContent;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public setTemplateId(param0: java.lang.Long): void;
                            public constructor(param0: android.content.Context);
                            public onUserAction(param0: string, param1: com.liferay.mobile.screens.base.interactor.Interactor, param2: native.Array<java.lang.Object>): void;
                            public isAutoLoad(): boolean;
                            public createInteractor(param0: string): com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayBaseInteractor;
                            public load(): void;
                            public onScreenletAttached(): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public getTemplateId(): java.lang.Long;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public setArticleId(param0: string): void;
                            public isJavascriptEnabled(): boolean;
                            public setAutoLoad(param0: boolean): void;
                            public getStructureId(): java.lang.Long;
                            public autoLoad(): void;
                            public setStructureId(param0: java.lang.Long): void;
                            public setLabelFields(param0: string): void;
                            public loadingFromCache(param0: boolean): void;
                            public setListener(param0: com.liferay.mobile.screens.webcontent.display.WebContentDisplayListener): void;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module connector {
                            export class JournalContentConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getArticleContent(param0: number, param1: string, param2: string, param3: any): string;
                                    getArticle(param0: java.lang.Long, param1: string): org.json.JSONObject;
                                    getJournalArticles(param0: number, param1: number, param2: number, param3: number, param4: any): org.json.JSONArray;
                                    getJournalArticlesCount(param0: number, param1: number): java.lang.Integer;
                                });
                                public getArticleContent(param0: number, param1: string, param2: string, param3: any): string;
                                public getJournalArticles(param0: number, param1: number, param2: number, param3: number, param4: any): org.json.JSONArray;
                                public getArticle(param0: java.lang.Long, param1: string): org.json.JSONObject;
                                public getJournalArticlesCount(param0: number, param1: number): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module connector {
                            export class JournalContentConnector62 {
                                public constructor(param0: any);
                                public getArticleContent(param0: number, param1: string, param2: string, param3: any): string;
                                public getJournalArticles(param0: number, param1: number, param2: number, param3: number, param4: any): org.json.JSONArray;
                                public getArticle(param0: java.lang.Long, param1: string): org.json.JSONObject;
                                public getJournalArticlesCount(param0: number, param1: number): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.JSONObjectWrapper.d.ts" />
/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module connector {
                            export class JournalContentConnector70 {
                                public constructor(param0: any);
                                public getArticleContent(param0: number, param1: string, param2: string, param3: any): string;
                                public getJournalArticles(param0: number, param1: number, param2: number, param3: number, param4: any): org.json.JSONArray;
                                public getArticle(param0: java.lang.Long, param1: string): org.json.JSONObject;
                                public getJournalArticlesCount(param0: number, param1: number): java.lang.Integer;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module connector {
                            export class ScreensJournalContentConnector {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    getJournalArticleContent(param0: number, param1: string, param2: number, param3: string): string;
                                });
                                public getJournalArticleContent(param0: number, param1: string, param2: number, param3: string): string;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module connector {
                            export class ScreensJournalContentConnector62 {
                                public constructor(param0: any);
                                public getJournalArticleContent(param0: number, param1: string, param2: number, param3: string): string;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.android.service.Session.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module connector {
                            export class ScreensJournalContentConnector70 {
                                public constructor(param0: any);
                                public getJournalArticleContent(param0: number, param1: string, param2: number, param3: string): string;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module interactor {
                            export abstract class WebContentDisplayBaseInteractor extends com.liferay.mobile.screens.base.interactor.BaseCacheReadInteractor {
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public validate(param0: java.util.Locale): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public constructor();
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.webcontent.WebContent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module interactor {
                            export class WebContentDisplayEvent extends com.liferay.mobile.screens.base.list.interactor.ListEvent {
                                public constructor(param0: com.liferay.mobile.screens.webcontent.WebContent);
                                public constructor(param0: java.lang.Exception);
                                public getWebContent(): com.liferay.mobile.screens.webcontent.WebContent;
                                public getModel(): com.liferay.mobile.screens.webcontent.WebContent;
                                public constructor();
                                public constructor(param0: org.json.JSONObject);
                                public constructor(param0: string);
                                public getListKey(): string;
                                public getModel(): java.lang.Object;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module interactor {
                            export class WebContentDisplayFromArticleIdInteractor extends com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayBaseInteractor {
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public onFailure(param0: com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent): void;
                                public validate(param0: java.util.Locale): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public getScreensJournalArticleService(): com.liferay.mobile.screens.webcontent.display.connector.ScreensJournalContentConnector;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public onSuccess(param0: com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent): void;
                                public getJournalArticleService(): com.liferay.mobile.screens.webcontent.display.connector.JournalContentConnector;
                                public validate(param0: number, param1: string, param2: java.util.Locale): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.event.BasicEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module interactor {
                            export class WebContentDisplayFromStructureInteractor extends com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayBaseInteractor {
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.base.interactor.event.BasicEvent;
                                public onFailure(param0: com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent): void;
                                public onSuccess(param0: com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent): void;
                                public onFailure(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public execute(param0: native.Array<java.lang.Object>): com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public onSuccess(param0: com.liferay.mobile.screens.base.interactor.event.BasicEvent): void;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.BaseScreenlet.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.WebContent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module display {
                        export module view {
                            export class WebContentDisplayViewModel {
                                /**
                                 * Constructs a new instance of the com.liferay.mobile.screens.webcontent.display.view.WebContentDisplayViewModel interface with the provided implementation.
                                 */
                                public constructor(implementation: {
                                    showFinishOperation(param0: com.liferay.mobile.screens.webcontent.WebContent): void;
                                    showStartOperation(param0: string): void;
                                    showFinishOperation(param0: string): void;
                                    showFailedOperation(param0: string, param1: java.lang.Exception): void;
                                    getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                    setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                });
                                public showFinishOperation(param0: string): void;
                                public getScreenlet(): com.liferay.mobile.screens.base.BaseScreenlet;
                                public setScreenlet(param0: com.liferay.mobile.screens.base.BaseScreenlet): void;
                                public showStartOperation(param0: string): void;
                                public showFinishOperation(param0: com.liferay.mobile.screens.webcontent.WebContent): void;
                                public showFailedOperation(param0: string, param1: java.lang.Exception): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.interactor.Interactor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.BaseListInteractor.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.list.interactor.WebContentListInteractor.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module list {
                        export class WebContentListScreenlet extends com.liferay.mobile.screens.base.list.BaseListScreenlet implements com.liferay.mobile.screens.base.list.interactor.BaseListInteractorListener {
                            public loadRows(param0: com.liferay.mobile.screens.webcontent.list.interactor.WebContentListInteractor): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
                            public setFolderId(param0: number): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
                            public error(param0: java.lang.Exception, param1: string): void;
                            public retrievingOnline(param0: boolean, param1: java.lang.Exception): void;
                            public storingToCache(param0: java.lang.Object): void;
                            public createInteractor(param0: string): com.liferay.mobile.screens.webcontent.list.interactor.WebContentListInteractor;
                            public createInteractor(param0: string): com.liferay.mobile.screens.base.interactor.Interactor;
                            public onListRowsReceived(param0: number, param1: number, param2: java.util.List<any>, param3: number): void;
                            public createScreenletView(param0: android.content.Context, param1: android.util.AttributeSet): android.view.View;
                            public loadingFromCache(param0: boolean): void;
                            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                            public getFolderId(): number;
                            public loadRows(param0: com.liferay.mobile.screens.base.list.interactor.BaseListInteractor): void;
                            public onListRowsFailure(param0: number, param1: number, param2: java.lang.Exception): void;
                            public constructor(param0: android.content.Context);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.ListEvent.d.ts" />
/// <reference path="./com.liferay.mobile.screens.base.list.interactor.Query.d.ts" />
/// <reference path="./com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
export module com {
    export module liferay {
        export module mobile {
            export module screens {
                export module webcontent {
                    export module list {
                        export module interactor {
                            export class WebContentListInteractor extends com.liferay.mobile.screens.base.list.interactor.BaseListInteractor {
                                public getPageRowCountRequest(param0: native.Array<java.lang.Object>): java.lang.Integer;
                                public onScreenletDetached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public onScreenletDetached(param0: java.lang.Object): void;
                                public getPageRowsRequest(param0: com.liferay.mobile.screens.base.list.interactor.Query, param1: native.Array<java.lang.Object>): org.json.JSONArray;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.webcontent.display.interactor.WebContentDisplayEvent;
                                public createEntity(param0: java.util.Map<any, any>): com.liferay.mobile.screens.base.list.interactor.ListEvent;
                                public onScreenletAttached(param0: com.liferay.mobile.screens.base.interactor.listener.BaseCacheListener): void;
                                public constructor();
                                public getIdFromArgs(param0: native.Array<java.lang.Object>): string;
                                public onScreenletAttached(param0: java.lang.Object): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

