sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cyb.com.project1.controller.View1", {
            onInit: function () {
                // var model = new sap.ui.model.json.JSONModel();
                // model.setData({
                //     listItem : [{
                //         "id": 1,
                //         "first_name": "Tull"
                //       }, {
                //         "id": 2,
                //         "first_name": "Heall"
                //       }, {
                //         "id": 3,
                //         "first_name": "Annabella"
                //       }, {
                //         "id": 4,
                //         "first_name": "Benedikta"
                //       }, {
                //         "id": 5,
                //         "first_name": "Carny"
                //       }]
                // })
                // this.getView().setModel(model,'localModel');
            },
            onAddListItem : function(oEvent){
                // var data = new Date().toString();
                // let modelData  = this.getView().getModel('localModel').getProperty('/listItem');
                // modelData.push({
                //         "id": 5,
                //         "first_name": data
                // });
                // this.getView().getModel('localModel').updateBindings();
            }
            //onBeforRendering /onAfterRendering / onExit
        });
    });
