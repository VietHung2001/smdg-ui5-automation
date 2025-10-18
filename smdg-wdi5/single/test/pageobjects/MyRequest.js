module.exports = {
    myRequest: {
        //forceSelect: true,
        selector: {
            controlType: "sap.m.IconTabFilter",
            viewName: "com.laidon.simplemdg.view.App",
            i18NText: {
                propertyName: "text",
                key: "APP_SIDEBAR_MYREQUEST"
            }
        }
    },

    requestTypeSingle: {
        selector: {
            controlType: "sap.m.IconTabFilter",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            i18NText: {
                propertyName: "text",
                key: "APP_REQUEST_TYPE_SINGLE"
            },
        }
    },

    newRequest: {
        selector: {
            controlType: "sap.m.Button",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            bindingPath: {
                path: "",
                propertyPath: "/tabMass",
                modelName: "local"
            }
        }
    },

    selectObjectType: {
        selector: {
            controlType: "sap.m.ComboBox",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            bindingPath: {
                path: "",
                propertyPath: "/selectedObjectTypeToCreate",
                modelName: "local"
            }
        }
    },

    selectObjectTypeNext: {
        selector: {
            controlType: "sap.m.Button",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            i18NText: {
                propertyName: "text",
                key: "APP_BUSINESSREQUESTPAGE_OBJECTTYPEPOPOVER_BUTTONTEXT"
            }
        }
    },
    searchTemplateField: {
        selector: {
            controlType: "sap.m.SearchField",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            searchOpenDialogs: true
        }
    },

    selectTemplateItem: (templateItem) => ({
        forceSelect: true,
        selector: {
            controlType: "sap.m.Text",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            properties: {
                text: templateItem
            },searchOpenDialogs: true,
        }
    }),

    descriptionField: {
        selector: {
            id: "idRqDescInput",
            viewName: "com.laidon.simplemdg.view.CreateRequest",
        }
    },

    priorityField: {
        selector: {
            id: "idPriorityCombo",
            viewName: "com.laidon.simplemdg.view.CreateRequest",
        }
    },

    reasonField: {
        selector: {
            id: "idReasonCombo",
            viewName: "com.laidon.simplemdg.view.CreateRequest",
        }
    },

    groupBy: {
        selector: {
            id: "groupByCbx",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            interaction: {
                idSuffix: "arrow"
            }
        }
    },
/// thanh search bar ở my request
    searchbarField: {
       selector: {
            id: "requestHistorySearchField",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            }
    },
// nút chọn nhiều option tại 1 CR
    selectOptionType: {
        selector: {
            controlType: "sap.m.Button",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            bindingPath: {
                path: "/aRequestList/0",
                modelName: "local"
            }
        }
    },
// nút copy request 
   selectOptionCopy: {
        selector: {
            controlType: "sap.ui.unified.MenuItem",
            viewName: "com.laidon.simplemdg.view.RequestHistory",
            properties: {
                text: "Copy request"
            },searchOpenDialogs: true,
        }
    },
// nút button submit góc phải
    submitbutton: {
        selector: {
            id: "submitButton",
            viewName: "com.laidon.simplemdg.view.CreateRequest",
            }
        },
// nút button submit trong dialog
    submitbuttonDialog: {
        selector: {
            controlType: "sap.m.Button",
            viewName: "com.laidon.simplemdg.view.CreateRequest",
            i18NText: {
                    propertyName: "text",
                    key: "APP_COMMON_POPUP_CREATEREQUEST_SUBMIT"
            },
            searchOpenDialogs: true,
            }
        },

        okbuttonDialog: {
        selector: {
            controlType: "sap.m.Button",
            searchOpenDialogs: true,
            }
        },



   

    
}
