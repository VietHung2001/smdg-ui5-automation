module.exports = {
    myInbox: {
        //forceSelect: true,
        selector: {
            controlType: "sap.m.IconTabFilter",
            viewName: "com.laidon.simplemdg.view.App",
            i18NText: {
                propertyName: "text",
                key: "APP_SIDEBAR_MYINBOX"
            }
        }
    },

    // inboxTypeSingle: {
    //     selector: {
    //         controlType: "sap.m.IconTabFilter",
    //         viewName: "com.laidon.simplemdg.view.RequestHistory",
    //         i18NText: {
    //             propertyName: "text",
    //             key: "APP_SIDEBAR_MYINBOX"
    //         },
    //     }
    // },

    // navigate tab group in inbox
     selectOptionGroup: {
        selector: {
            controlType: "sap.m.IconTabFilter",
            viewName: "com.laidon.simplemdg.view.MyInbox",
            bindingPath: {
                path: "",
                propertyPath: "/Group",
                modelName: "local"
            }
        }
    },
// navigate tab individual in inbox
        selectOptionIndual: {
        selector: {
            controlType: "sap.m.IconTabFilter",
            viewName: "com.laidon.simplemdg.view.MyInbox",
            bindingPath: {
                path: "",
                propertyPath: "/Direct",
                modelName: "local"
            }
        }
    },
// navigate tab Mass in inbox
      selectOptionMass: {
        selector: {
            controlType: "sap.m.IconTabFilter",
            viewName: "com.laidon.simplemdg.view.MyInbox",
            bindingPath: {
                path: "",
                propertyPath: "/Mass",
                modelName: "local"
            }
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

    // nút checkbox  trong toàn bộ bảng
   checkboxbutton: {
        selector: {
            controlType: "sap.m.CheckBox",
            viewName: "com.laidon.simplemdg.view.MyInbox",
            properties: {
                editable: true
            },
            ancestor: {
                    controlType: "sap.m.ColumnListItem",
                    viewName: "com.laidon.simplemdg.view.MyInbox",
                    bindingPath: {
                            modelName: "local",
                            path: "/MyInboxData/0"
                    },
                    ancestor: {
                            id: "tableMyInbox",
                            viewName: "com.laidon.simplemdg.view.MyInbox"
                    }
        }
    }
},

// click approve ở my inbox
    Approvebuttoninbox: {
        selector: {
            controlType: "sap.m.Button",
            viewName: "com.laidon.simplemdg.view.MyInbox",
            properties: {
                text: "Approve"
            },
        }
    },

    //click confrim button dialog
     confrimbuttoninbox: {
        selector: {
            controlType: "sap.m.Button",
            properties: {
                text: "Confirm"
            },
            searchOpenDialogs: true,
        }
    },

    // approve button trong dialog 
    approvebuttondialog: {
        selector: {
            controlType: "sap.m.Button",
            properties: {
                text: "Approve"
            },
            searchOpenDialogs: true,
        }

    },





   

    
}
