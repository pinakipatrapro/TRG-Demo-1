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
                var model = new sap.ui.model.json.JSONModel();
                $.ajax('/localNode/json').then(e=>{model.setData({listData:e})});
                this.getView().setModel(model,'localModel');
            },
            onAddListItem : function(oEvent){
                // var data = new Date().toString();
                // let modelData  = this.getView().getModel('localModel').getProperty('/listItem');
                // modelData.push({
                //         "id": 5,
                //         "first_name": data
                // });
                // this.getView().getModel('localModel').updateBindings();
            },
            onProductDelete : function(oEvent){
                debugger;
                let productID = oEvent.getParameter('listItem').getBindingContext('viewModel').getProperty('ID');
               

                 var settings = {
                    "url": `/localNode/routes/Products/delete/${productID}`,
                    "method": "GET",
                    "headers":{
                    "X-CSRF-Token":this.getView().getModel('viewModel').getSecurityToken(),
                    "Content-Type": "application/json"
                    }
                };
                $.ajax(settings).done(()=>{
                    this.getView().getModel('viewModel').refresh();
                });
            }
        });
    });
