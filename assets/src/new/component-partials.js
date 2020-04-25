(function(module) {
try {
  module = angular.module('componentPartials');
} catch (e) {
  module = angular.module('componentPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('root.html',
    '<navigation-menu></navigation-menu>\n' +
    '\n' +
    '<div class="container mt-20">\n' +
    '	<ui-view></ui-view>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('componentPartials');
} catch (e) {
  module = angular.module('componentPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/index/index.html',
    '<h3 class="mb-30">Homepage</h3>\n' +
    '\n' +
    '<chip chip-container="$ctrl.listOfSelected" on-container-change="$ctrl.onContainerChange" can-add-new-item="true" dropdown-container="$ctrl.listOfCars" placeholder="\'+ Type a car name and select it from a list\'">\n' +
    '	<chip-label>Add Cars below:</chip-label>\n' +
    '	<dropdown-icon class="fa fa-map-marker fa-17 text-gray-2" aria-hidden="true"></dropdown-icon>\n' +
    '</chip>\n' +
    '\n' +
    '\n' +
    '<div style="padding-top:20px;">\n' +
    '	<div class="card mb-30">\n' +
    '		<h5 class="card-header">16 Column grid</h5>\n' +
    '		<div class="card-body">\n' +
    '			<div class="row">\n' +
    '				<div class="col-md-8">\n' +
    '					<p class="mb-0"><span class="fw-700">container size </span>sm: 540px</p>\n' +
    '					<p class="mb-0"><span class="fw-700">container size </span>md: 720px</p>\n' +
    '					<p class="mb-0"><span class="fw-700">container size </span>lg: 960px</p>\n' +
    '					<p class="mb-0"><span class="fw-700">container size </span>xl: 1140px</p>\n' +
    '					<p class="mb-10"><span class="fw-700">container size </span>xxl: 1600px</p>\n' +
    '				</div>\n' +
    '				<div class="col-md-8">\n' +
    '					<p class="mb-0"><span class="fw-700">breakpoints </span>sm: 	 0 - 540px</p>\n' +
    '					<p class="mb-0"><span class="fw-700">breakpoints </span>md:  615px - 720px</p>\n' +
    '					<p class="mb-0"><span class="fw-700">breakpoints </span>lg:  794px - 960px</p>\n' +
    '					<p class="mb-0"><span class="fw-700">breakpoints </span>xl:  960px - 1320px</p>\n' +
    '					<p class="mb-0"><span class="fw-700">breakpoints </span>xxl:1320px - 1600px</p>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#000;">a</div>\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#d5d5d5;">a</div>\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#000;">a</div>\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#d5d5d5;">a</div>\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#000;">a</div>\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#d5d5d5;">a</div>\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#000;">a</div>\n' +
    '				<div class="col-lg-2 col-xl-2 col-xxl-2" style="background-color:#d5d5d5;">a</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '<!-- ||||||||||||||||||||||||||||||||||CHECKBOX / RADIO START |||||||||||||||||||||||||||||||||||||||||| -->\n' +
    '	<div class="card mb-30">\n' +
    '		<h5 class="card-header">Checkbox / radiobox</h5>\n' +
    '		<div class="card-body">\n' +
    '			<div class="row">\n' +
    '				<div class="col-16">\n' +
    '					<div class="form-group">\n' +
    '						<div class="checkbox checkbox-material checkbox-inline">\n' +
    '							<input id="checkbox_test1" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test1">Remember me</label>\n' +
    '						</div>\n' +
    '	\n' +
    '						<div class="checkbox checkbox-material checkbox-danger checkbox-inline">\n' +
    '							<input id="checkbox_test2" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test2">Remember me</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="checkbox checkbox-material checkbox-info checkbox-inline">\n' +
    '							<input id="checkbox_test3" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test3">Remember me</label>\n' +
    '						</div>\n' +
    '	\n' +
    '						<div class="checkbox checkbox-material checkbox-warning checkbox-inline">\n' +
    '							<input id="checkbox_test4" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test4">Remember me</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="checkbox checkbox-material checkbox-success checkbox-inline">\n' +
    '							<input id="checkbox_test5" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test5">Remember me</label>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '\n' +
    '					<div class="form-group">\n' +
    '						<div class="checkbox checkbox-material checkbox-lg checkbox-inline">\n' +
    '							<input id="checkbox_test12" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test12">Remember me</label>\n' +
    '						</div>\n' +
    '	\n' +
    '						<div class="checkbox checkbox-material checkbox-lg checkbox-danger checkbox-inline">\n' +
    '							<input id="checkbox_test23" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test23">Remember me</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="checkbox checkbox-material checkbox-lg checkbox-info checkbox-inline">\n' +
    '							<input id="checkbox_test34" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test34">Remember me</label>\n' +
    '						</div>\n' +
    '	\n' +
    '						<div class="checkbox checkbox-material checkbox-lg checkbox-warning checkbox-inline">\n' +
    '							<input id="checkbox_test45" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test45">Remember me</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="checkbox checkbox-material checkbox-lg checkbox-success checkbox-inline">\n' +
    '							<input id="checkbox_test56" name="rememberMe" type="checkbox">\n' +
    '							<label for="checkbox_test56">Remember me</label>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<hr>\n' +
    '			<div class="row">\n' +
    '				<div class="col-16">\n' +
    '					<div class="form-group">\n' +
    '						<div class="radio radio-material radio-inline">\n' +
    '							<input id="radiobox_test1" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test1">Choose me!</label>\n' +
    '						</div>\n' +
    '	\n' +
    '						<div class="radio radio-material radio-danger radio-inline">\n' +
    '							<input id="radiobox_test2" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test2">Choose me!</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="radio radio-material radio-info radio-inline">\n' +
    '							<input id="radiobox_test3" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test3">Choose me!</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="radio radio-material radio-warning radio-inline">\n' +
    '							<input id="radiobox_test4" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test4">Choose me!</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="radio radio-material radio-success radio-inline">\n' +
    '							<input id="radiobox_test5" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test5">Choose me!</label>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '	\n' +
    '					<div class="form-group">\n' +
    '						<div class="radio radio-material radio-inline radio-lg">\n' +
    '							<input id="radiobox_test11" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test11">Choose me!</label>\n' +
    '						</div>\n' +
    '	\n' +
    '						<div class="radio radio-material radio-danger radio-inline radio-lg">\n' +
    '							<input id="radiobox_test22" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test22">Choose me!</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="radio radio-material radio-info radio-inline radio-lg">\n' +
    '							<input id="radiobox_test33" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test33">Choose me!</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="radio radio-material radio-warning radio-inline radio-lg">\n' +
    '							<input id="radiobox_test44" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test44">Choose me!</label>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="radio radio-material radio-success radio-inline radio-lg">\n' +
    '							<input id="radiobox_test55" name="rememberMe" type="radio">\n' +
    '							<label for="radiobox_test55">Choose me!</label>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '	\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '<!-- ||||||||||||||||||||||||||||||||||CHECKBOX / RADIO END |||||||||||||||||||||||||||||||||||||||||| -->\n' +
    '\n' +
    '\n' +
    '	<div class="card mb-30">\n' +
    '		<h5 class="card-header">Switch</h5>\n' +
    '		<div class="card-body">\n' +
    '			\n' +
    '		<div class="form-group">\n' +
    '			<div class="material-checkbox-switch switch-inline ml-15">\n' +
    '				<input id="switch_test1" type="checkbox">\n' +
    '				<label for="switch_test1"></label>\n' +
    '			</div>\n' +
    '			<div class="material-checkbox-switch switch-inline ml-15 switch-info">\n' +
    '				<input id="switch_test2" type="checkbox">\n' +
    '				<label for="switch_test2"></label>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="material-checkbox-switch switch-inline ml-15 switch-success">\n' +
    '				<input id="switch_test3" type="checkbox">\n' +
    '				<label for="switch_test3"></label>\n' +
    '			</div>	\n' +
    '\n' +
    '			<div class="material-checkbox-switch switch-inline ml-15 switch-danger">\n' +
    '				<input id="switch_test4" type="checkbox">\n' +
    '				<label for="switch_test4"></label>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="material-checkbox-switch switch-inline ml-15 switch-warning">\n' +
    '				<input id="switch_test5" type="checkbox">\n' +
    '				<label for="switch_test5"></label>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '\n' +
    '	<div class="card mb-30">\n' +
    '		<h5 class="card-header">Range</h5>\n' +
    '		<div class="card-body">\n' +
    '\n' +
    '		<div class="form-group">			\n' +
    '			<input class="material-range range-orange" id="switch_test1" type="range">\n' +
    '		</div>\n' +
    '		<div class="form-group" style="background-color:#94c562;">\n' +
    '			<input class="material-range range-white" id="switch_test1" type="range">\n' +
    '		</div>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div class="card mb-30">\n' +
    '		<h5 class="card-header">Range</h5>\n' +
    '		<div class="card-body">\n' +
    '\n' +
    '			<i class="fa fa-user"></i>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div class="card mb-30">\n' +
    '		<h5 class="card-header">MODALS</h5>\n' +
    '		<div class="card-body">\n' +
    '\n' +
    '			<button type="button" class="btn btn-primary mt-50" data-toggle="modal" data-target="#exampleModal">\n' +
    '				  Launch demo modal\n' +
    '				</button>\n' +
    '\n' +
    '				<!-- Modal -->\n' +
    '				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
    '				  <div class="modal-dialog" role="document">\n' +
    '				    <div class="modal-content">\n' +
    '				      <div class="modal-header">\n' +
    '				        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>\n' +
    '				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '				          <span aria-hidden="true">&times;</span>\n' +
    '				        </button>\n' +
    '				      </div>\n' +
    '				      <div class="modal-body">\n' +
    '				        ...\n' +
    '				      </div>\n' +
    '				      <div class="modal-footer">\n' +
    '				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
    '				        <button type="button" class="btn btn-primary">Save changes</button>\n' +
    '				      </div>\n' +
    '				    </div>\n' +
    '				  </div>\n' +
    '				</div>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	\n' +
    '\n' +
    '	<div class="card mb-40">\n' +
    '		<h5 class="card-header">INPUTS</h5>\n' +
    '		<div class="card-body">\n' +
    '			<div class="form-group apply-pr">\n' +
    '				<input type="text" class="form-control form-control-material material-lg" id="test_input" name="username" required="" >\n' +
    '				<label for="test_input" class="form-control-placeholder">Username</label>\n' +
    '			</div>\n' +
    '			<div class="form-group apply-pr">\n' +
    '                <input type="text" class="form-control form-control-material" id="test_input_Regular" name="RestaurantName" required="">\n' +
    '                <label for="test_input_Regular" class="form-control-placeholder">Username</label>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group apply-pr">\n' +
    '                <input type="text" class="form-control form-control-material" id="test_input_Regular1" name="RestaurantName" >\n' +
    '                <label for="test_input_Regular1" class="form-control-placeholder">Username</label>\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '			<h5>Material input validation [focused]</h5>\n' +
    '			<div class="form-group apply-pr is-invalid">\n' +
    '                <input type="text" class="form-control form-control-material" id="test_input_Regula2" name="RestaurantName" >\n' +
    '                <label for="test_input_Regula2" class="form-control-placeholder">Username</label>\n' +
    '                <div class="form-control-append-right invalid-indicator p-5"><i class="fa fa-times fa-18 text-red"></i></div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group apply-pr is-valid">\n' +
    '                <input type="text" class="form-control form-control-material" id="test_input_Regular3" name="RestaurantName" >\n' +
    '                <label for="test_input_Regular3" class="form-control-placeholder">Username</label>\n' +
    '                <div class="form-control-append-right valid-indicator p-5"><i class="fa fa-check fa-18 text-green"></i></div>\n' +
    '			</div>\n' +
    '\n' +
    '			<h5>Material LG input validation</h5>\n' +
    '			<div class="form-group apply-pr is-invalid">\n' +
    '                <input type="text" class="form-control form-control-material material-lg" id="test_input_Regular4" name="RestaurantName" required>\n' +
    '                <label for="test_input_Regular4" class="form-control-placeholder">Username</label>\n' +
    '                <div class="form-control-append-right invalid-indicator p-5"><i class="fa fa-times text-red"></i></div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group apply-pr is-valid">\n' +
    '                <input type="text" class="form-control form-control-material material-lg" id="test_input_Regular5" name="RestaurantName" required>\n' +
    '                <label for="test_input_Regular5" class="form-control-placeholder">Username</label>\n' +
    '                <div class="form-control-append-right valid-indicator p-5"><i class="fa fa-check text-green"></i></div>\n' +
    '			</div>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '	<div class="card mb-40">\n' +
    '		<h5 class="card-header">INPUTS</h5>\n' +
    '		<div class="card-body">\n' +
    '			\n' +
    '			<button type="button" class="btn-material btn-primary"><span>Primary</span></button>\n' +
    '			<button type="button" class="btn-material btn-secondary"><span>Secondary</span></button>\n' +
    '			<button type="button" class="btn-material btn-success"><span>Success</span></button>\n' +
    '			<button type="button" class="btn-material btn-danger"><span>Danger</span></button>\n' +
    '			<button type="button" class="btn-material btn-warning"><span>Warning</span></button>\n' +
    '			<button type="button" class="btn-material btn-info"><span>Info</span></button>\n' +
    '			<button type="button" class="btn-material btn-light"><span>Light</span></button>\n' +
    '			<button type="button" class="btn-material btn-dark"><span>Dark</span></button>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('componentPartials');
} catch (e) {
  module = angular.module('componentPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/list/list.html',
    '<h3>List</h3>\n' +
    '<table-dynamic>    \n' +
    '\n' +
    '</table-dynamic>');
}]);
})();

(function(module) {
try {
  module = angular.module('componentPartials');
} catch (e) {
  module = angular.module('componentPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/chip/chip.html',
    '<div class="textarea-material textarea-multiple" ng-click="$ctrl.setFocusOn($event);">\n' +
    '	<p ng-transclude="label" class="mb-0"></p>\n' +
    '	<div class="chip-container">\n' +
    '		<span class="chip chip-default" ng-class="{\'selected\':chip.selected}" ng-click="$ctrl.setSelected($event,chip)" ng-repeat="chip in $ctrl.chipContainer track by $index">{{chip.name}} <span class="chip-close" ng-click="$ctrl.removeChip($event, chip)"></span></span>\n' +
    '		<div class="chip-entryzone-wrapper">\n' +
    '			<input type="text" class="chip-entryzone" maxlength="20" placeholder="{{$ctrl.placeholder}}" ng-model="$ctrl.newChip" ng-backspace="$ctrl.switchFocusToChip()" ng-change="$ctrl.searchInputOnChange()" ng-keydown="$ctrl.searchInputOnKeydown($event)" ng-focus="$ctrl.searchInputOnFocus()" ng-blur="$ctrl.searchInputOnBlur()">\n' +
    '			<div class="dropdown dropdown-material" ng-class="{\'open\':$ctrl.isSearchInputisActive}">\n' +
    '				<ul class="dropdown-menu" style="max-height: 286px;" aria-labelledby="dropdownMenu1">\n' +
    '\n' +
    '					<li ng-repeat="food in $ctrl.foodListFiltered" ng-if="food.new"><i ng-transclude="icon"></i>\n' +
    '						<a ng-class="{\'selected\':food.selected}" ng-click="$ctrl.addChipOnClick(food)">\n' +
    '\n' +
    '						<span ng-if="$ctrl.canAddNewItem">EKLE: [<u><span ng-bind-html="food.name"></span></u>]</span>\n' +
    '						<span ng-if="!$ctrl.canAddNewItem">[<u><span ng-bind-html="food.name"></span></u>] bulunamadı</span>\n' +
    '					\n' +
    '					</a></li>\n' +
    '					<li ng-repeat="food in $ctrl.foodListFiltered" ng-if="!food.new"><i ng-transclude="icon"></i><a ng-class="{\'selected\':food.selected}" ng-click="$ctrl.addChipOnClick(food)"> <span ng-bind-html="food.highlighted"></span></a></li>\n' +
    '				</ul>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('componentPartials');
} catch (e) {
  module = angular.module('componentPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/datatable/data-table.html',
    '<table class="table">\n' +
    '  <thead>\n' +
    '    <tr>\n' +
    '      <th scope="col">#</th>\n' +
    '      <th scope="col">First</th>\n' +
    '      <th scope="col">Last</th>\n' +
    '      <th scope="col">Handle</th>\n' +
    '    </tr>\n' +
    '  </thead>\n' +
    '  <tbody>\n' +
    '    <tr>\n' +
    '      <th scope="row">1</th>\n' +
    '      <td>Mark</td>\n' +
    '      <td>Otto</td>\n' +
    '      <td>@mdo</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <th scope="row">2</th>\n' +
    '      <td>Jacob</td>\n' +
    '      <td>Thornton</td>\n' +
    '      <td>@fat</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <th scope="row">3</th>\n' +
    '      <td>Larry</td>\n' +
    '      <td>the Bird</td>\n' +
    '      <td>@twitter</td>\n' +
    '    </tr>\n' +
    '  </tbody>\n' +
    '</table>');
}]);
})();

(function(module) {
try {
  module = angular.module('componentPartials');
} catch (e) {
  module = angular.module('componentPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/navigation/navigation.html',
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
    '	<div class="container">\n' +
    '		<a class="navbar-brand" href="#"></a>\n' +
    '		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
    '			<span class="navbar-toggler-icon"></span>\n' +
    '		</button>\n' +
    '		\n' +
    '		<div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
    '			<ul class="navbar-nav mr-auto">\n' +
    '				<li class="nav-item" ui-sref-active="active">\n' +
    '					<a class="nav-link" ui-sref="index.page">Anasayfa <span class="sr-only">(current)</span></a>\n' +
    '				</li>\n' +
    '				<li class="nav-item" ui-sref-active="active">\n' +
    '					<a class="nav-link" ui-sref="list.page" >List</a>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '			\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</nav>');
}]);
})();
