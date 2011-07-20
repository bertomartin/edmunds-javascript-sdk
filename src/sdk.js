function EDMUNDSAPI(d){var c=d;var e="v1";var g="http://api.edmunds.com/";var b="json";var a=document.getElementsByTagName("head")[0];function f(j){var i="";for(var h in j){if(j.hasOwnProperty(h)){if(i!==""){i+="&"}i+=h+"="+j[h]}}return i}this.getBaseUrl=function(){return g+e};this.getVersion=function(){return e};this.setVersion=function(h){e=h;return e};this.invoke=function(o,m,n){var i=f(m);var j=this.getBaseUrl();var l="cb"+new Date().getTime();EDMUNDSAPI[l]=n;i=(i)?"?"+i+"&api_key="+c+"&fmt="+b:"?api_key="+c+"&fmt="+b;var h=j+o+i+"&callback=EDMUNDSAPI."+l;var k=document.createElement("script");k.type="text/javascript";k.src=h;a.appendChild(k);return h}};(function(){if(!window.EDMUNDSAPI){throw new Error("Edmunds API: Core class is not loaded.")}window.EDMUNDSAPI.Vehicle=function(b){window.EDMUNDSAPI.apply(this,arguments)};window.EDMUNDSAPI.Vehicle.prototype=new window.EDMUNDSAPI;var a=window.EDMUNDSAPI.Vehicle.prototype;a.getListOfMakes=function(b){return this.invoke("/api/vehicle-directory-ajax/findmakes",{},b)};a.getListOfModelsByMake=function(b,c){return this.invoke("/api/vehicle-directory-ajax/findmakemodels",{make:b},c)};a.getListOfTypes=function(b){return this.invoke("/api/vehicle/stylerepository/findallvehicletypes",{},b)};a.getVehicle=function(b,c,d,e){return this.invoke("/api/vehicle/modelyearrepository/foryearmakemodel",{make:b,model:c,year:d},e)};a.getMakes=function(b){return this.invoke("/api/vehicle/makerepository/findall",{},b)};a.getMakesByYear=function(b,c){return this.invoke("/api/vehicle/makerepository/findmakesbymodelyear",{year:b},c)};a.getMakesByState=function(b,c){return this.invoke("/api/vehicle/makerepository/findmakesbypublicationstate",{state:b},c)};a.getNewMakes=function(b){return this.invoke("/api/vehicle/makerepository/findnewmakes",{},b)};a.getUsedMakes=function(b){return this.invoke("/api/vehicle/makerepository/findusedmakes",{},b)};a.getFutureMakes=function(b){return this.invoke("/api/vehicle/makerepository/findfuturemakes",{},b)};a.getMakeById=function(c,b){return this.invoke("/api/vehicle/makerepository/findbyid",{id:c},b)};a.getMakeByName=function(b,c){return this.invoke("/api/vehicle/makerepository/findmakebyname",{name:b},c)};a.getModelsByMakeAndYear=function(b,c,d){return this.invoke("/api/vehicle/modelrepository/findmodelsbymakeandyear",{make:b,year:c},d)};a.getModelsByMakeAndState=function(b,c,d){return this.invoke("/api/vehicle/modelrepository/findmodelsbymakeandpublicationstate",{make:b,state:c},d)};a.getModelsByMakeId=function(c,b){return this.invoke("/api/vehicle/modelrepository/findbymakeid",{makeid:c},b)};a.getModelsByMakeName=function(b,c){return this.invoke("/api/vehicle/modelrepository/findmodelsbymake",{make:b},c)};a.getFutureModelsByMakeId=function(c,b){return this.invoke("/api/vehicle/modelrepository/findfuturemodelsbymakeid",{makeId:c},b)};a.getUsedModelsByMakeId=function(c,b){return this.invoke("/api/vehicle/modelrepository/findusedmodelsbymakeid",{makeId:c},b)};a.getNewModelsByMakeId=function(c,b){return this.invoke("/api/vehicle/modelrepository/findnewmodelsbymakeid",{makeId:c},b)};a.getModelById=function(c,b){return this.invoke("/api/vehicle/modelrepository/findbyid",{id:c},b)};a.getModelByMakeAndModelName=function(b,c,d){return this.invoke("/api/vehicle/modelrepository/findmodelbymakemodelname",{make:b,model:c},d)};a.getModelYearById=function(c,b){return this.invoke("/api/vehicle/modelyearrepository/findbyid",{id:c},b)};a.getListOfYearsWithNew=function(b){return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithnew",{},b)};a.getListOfYearsWithNewOrUsed=function(b){return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithneworused",{},b)};a.getListOfYearsWithUsed=function(b){return this.invoke("/api/vehicle/modelyearrepository/finddistinctyearwithused",{},b)};a.getFutureModelYearsByModelId=function(c,b){return this.invoke("/api/vehicle/modelyearrepository/findfuturemodelyearsbymodelid",{modelId:c},b)};a.getModelYearsByMakeAndYear=function(b,c,d){return this.invoke("/api/vehicle/modelyearrepository/findmodelyearsbymakeandyear",{make:b,year:c},d)};a.getModelYearsByMakeAndModel=function(b,c,d){return this.invoke("/api/vehicle/modelyearrepository/findmodelyearsbymakemodel",{make:b,model:c},d)};a.getNewAndUsedModelYearsByMakeIdAndYear=function(b,c,d){return this.invoke("/api/vehicle/modelyearrepository/findnewandusedmodelyearsbymakeidandyear",{makeid:b,year:c},d)};a.getNewModelYearsByModelId=function(c,b){return this.invoke("/api/vehicle/modelyearrepository/findnewmodelyearsbymodelid",{modelId:c},b)};a.getUsedModelYearsByModelId=function(c,b){return this.invoke("/api/vehicle/modelyearrepository/findusedmodelyearsbymodelid",{modelId:c},b)};a.getModelYearsByCatAndState=function(b,c,d){return this.invoke("/api/vehicle/modelyearrepository/findyearsbycategoryandpublicationstate",{category:b,state:c},d)};a.getModelYearsByModelId=function(c,b){return this.invoke("/api/vehicle/modelyearrepository/formodelid",{modelid:c},b)}})();