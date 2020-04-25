(function ()
{
	/*"use strict";*/

	function ChipComponentController ($scope, $sce)
	{
		this.$onInit = function() 
		{
			var vm = this;
				if (!vm.chipContainer)
				{
					vm.chipContainer = [];
				}

				$scope.$watch(function ()
					{
						return vm.chipContainer;
					},
					function (n)
					{
						if (!n || !n.length) { return; }

						$.map(n, function (chip)
						{
							console.log(chip)
							if (_.findIndex(vm.foodListFiltered, function (a) { return a.id === chip.id; }) === -1)
							{
								vm.foodListFiltered.push(chip);
							}
						});
				});
				var ENTER = 13,
					BACKSPACE = 8,
					ESC = 27;

				$(document).on("keydown", function (e)
				{
					if (e.keyCode === BACKSPACE)
					{
						console.log("backspace")
						vm.switchFocusToChip();
						vm.removeSelectedChip();
						$scope.$apply();
					}
					if (e.keyCode === ENTER)
					{
						if (vm.isSearchInputisActive)
						{
							vm.addChipToTheSelecteds();
						}
						$scope.$apply();
					}
					if (e.keyCode === ESC)
					{
						vm.killSelectedChip();
						if (vm.isSearchInputisActive)
						{
							vm.killDropdown();
						}
						$scope.$apply();
					}
				});

				vm.newChip = null;
				//--------------------------------DROPDOWN
				vm.yemekListCursor = 0;
				vm.foodListFiltered = [];
				vm.autoIncrement = vm.dropdownContainer.length + 1;
				vm.isSearchInputisActive = false;


				//When key down in search input the function triggers and dropdown is shown to list items to be selected added as a chip.
				vm.searchInputOnKeydown = function ($event)
				{
					//setDeselectedOnCursorIndex(vm.yemekListCursor);
					var up = 38,
						down = 40;
					if ($event.keyCode === up && vm.isSearchInputisActive)
					{
						if (vm.yemekListCursor === 0)
						{
							vm.yemekListCursor = vm.foodListFiltered.length - 1; // cursor en başa kayar
						}
						else
						{
							vm.yemekListCursor = vm.yemekListCursor - 1;
						}
						if (vm.yemekListCursor > 1)
						{
							$(".dropdown.dropdown-material > .dropdown-menu").scrollTo("li:eq(" + (vm.yemekListCursor - 1) + ")", 1);
						}
						else
						{
							$(".dropdown.dropdown-material > .dropdown-menu").scrollTo("li:eq(" + vm.yemekListCursor + ")", 1);
						}
						$event.preventDefault();
					}
					else if ($event.keyCode === down && vm.isSearchInputisActive)
					{
						if (vm.yemekListCursor === vm.foodListFiltered.length - 1)
						{
							vm.yemekListCursor = 0; // cursor en sona kayar
						}
						else
						{
							vm.yemekListCursor = vm.yemekListCursor + 1;
						}

						if (vm.yemekListCursor < vm.foodListFiltered.length - 4 && vm.yemekListCursor > 4)
						{
							$(".dropdown.dropdown-material > .dropdown-menu").scrollTo("li:eq(" + (vm.yemekListCursor - 4) + ")", 1);
						}
						else
						{
							$(".dropdown.dropdown-material > .dropdown-menu").scrollTo("li:eq(" + vm.yemekListCursor + ")", 1);
						}
						$event.preventDefault();
					}
					setSelectedOnCursorIndex(vm.yemekListCursor);

				};

				//unsets the foodListFiltered item selected on given index value
				var setSelectedOnCursorIndex = function (index)
				{
					if (vm.newChip !== null && vm.newChip.length > 0)
					{
						if (vm.foodListFiltered.length > 0)
						{
							angular.forEach(vm.foodListFiltered,function(list,k)
							{
								list.selected=false;
							});

							vm.foodListFiltered[index].selected = true;
						}
					}
				};

				vm.searchInputOnChange = function ()
				{
					if (vm.newChip !== null && vm.newChip.length !== 0)
					{
						var re1 = RegExp(vm.newChip.turkishLowerCase(), "i");
						vm.foodListFiltered = [];
						vm.foodListFiltered = angular.copy(vm.dropdownContainer.filter(function (food)
						{
							var search = food.name.turkishLowerCase().match(re1);

							if (search !== null)
							{
								var alreadyExistInChipContainer = false;
								vm.chipContainer.forEach(function (c)
								{
									if (c.name.turkishLowerCase() === food.name.turkishLowerCase())
									{
										alreadyExistInChipContainer = true;
									}
								});

								if (alreadyExistInChipContainer)
								{
									return false;
								}

								food.result = search;

								var le = vm.newChip.length;
								var ind = search.index;
								food.highlighted = $sce.trustAsHtml(food.name.substr(0, ind) + "<b>" + food.name.substr(ind, le) + "</b>" + food.name.substr(ind + le));
								

								return true;
							}
							return false;
						}));
						if (vm.foodListFiltered.length === 0)
						{
							var _food = {
								id: vm.dropdownContainer[vm.dropdownContainer.length - 1].id + 1,
								new: true,
								name: vm.newChip,
								selected: true
							};
							vm.foodListFiltered.push(_food);
						}
						vm.yemekListCursor = 0;
						setSelectedOnCursorIndex(vm.yemekListCursor);
						vm.isSearchInputisActive = true;
					}
					else
					{
						vm.isSearchInputisActive = false;
					}
				};

				vm.searchInputOnFocus = function ()
				{
					if (vm.newChip !== null && vm.newChip.length !== 0)
					{
						vm.isSearchInputisActive = true;
					}
				};

				vm.killDropdown = function ()
				{
					vm.isSearchInputisActive = false;
					vm.foodListFiltered[vm.yemekListCursor].selected = false;
					vm.yemekListCursor = 0;
					$(".dropdown.dropdown-material > .dropdown-menu").scrollTo("li:eq(" + vm.yemekListCursor + ")", 0);
				};

				vm.killSelectedChip = function ()
				{
					var index = getCurrentSelectedIndex();
					if (index !== false)
					{
						vm.chipContainer[index].selected = false;
					}
				};

				vm.dispatchChipContainerRemoveEvent = function (id)
				{
					if (vm.onContainerChange)
					{
						vm.onContainerChange("remove", id);
					}
				};

				vm.dispatchChipContainerAddEvent = function (id)
				{
					if (vm.onContainerChange)
					{
						vm.onContainerChange("add", id);
					}
				};

				vm.addChipToTheSelecteds = function ()
				{
					vm.addChipOnClick(vm.foodListFiltered[vm.yemekListCursor]);
				};

				vm.setSelected = function ($event, chip)
				{
					var index = getCurrentSelectedIndex();
					if (index !== false)
					{
						if (vm.chipContainer[index].id !== chip.id)
						{
							vm.chipContainer[index].selected = false;
							chip.selected = !chip.selected;
						}
						else
						{
							chip.selected = !chip.selected;
						}
					}
					else
					{
						chip.selected = !chip.selected;
					}
					$event.stopPropagation();
				};

				vm.setFocusOn = function (element)
				{
					$($(element).get(0).currentTarget).find("input").focus();
				};

				//seçili chipi silmeye yarar
				vm.removeSelectedChip = function ()
				{
					var index = getCurrentSelectedIndex();
					if (index !== false)
					{
						console.warn("düştü");
						var id = vm.chipContainer[index].id;
						vm.chipContainer.splice(index, 1);
						vm.dispatchChipContainerRemoveEvent(id);
					}
				};

				//çarpı butnuna bastığında chipi siler
				vm.removeChip = function ($event, chip)
				{
					var id = chip.id;
					var index = findWithAttr(vm.chipContainer, "id", id);
					vm.chipContainer.splice(index, 1);
					vm.dispatchChipContainerRemoveEvent(id);
					$event.stopPropagation();

				};

				vm.addChipOnClick = function (chip)
				{
					var _chip = angular.copy(chip);
					_chip.selected = false;
					if (_chip.hasOwnProperty("new") && _chip.new)
					{
						if (vm.canAddNewItem)
						{
							_chip.id = vm.autoIncrement;
							_chip.new = true;
							vm.chipContainer.push(_chip);
							vm.dispatchChipContainerAddEvent(_chip.id);

							vm.autoIncrement++;
						}
					}
					else
					{
						_chip.new = false;
						vm.chipContainer.push(_chip);
						vm.dispatchChipContainerAddEvent(_chip.id);

					}
					vm.newChip = null;
					vm.foodListFiltered[vm.yemekListCursor].selected = false;
					vm.killDropdown();
				};

				vm.switchFocusToChip = function ()
				{
					if (vm.chipContainer.length === 0) { return; }
					var index;
					if (vm.newChip === null || vm.newChip.length === 0)
					{
						index = vm.chipContainer.length - 1;
						if (vm.chipContainer[index].selected === true)
						{
							vm.removeSelectedChip();
						}
						else
						{
							vm.chipContainer[index].selected = true;
						}
					}

				};

				//tobe deletec
				vm.PopulateChips = function ()
				{
					var index = randomIndex(0, vm.chipContainer.length);
					var newObject = vm.chipContainer[index];
					newObject.id = vm.chipContainer.length;
					vm.chipContainer.push(newObject);
					vm.dispatchChipContainerAddEvent(newObject.id);
				};

				//tobedeleted
				vm.DePopulateChips = function ()
				{
					var id = vm.chipContainer[vm.chipContainer.length - 1].id;
					vm.chipContainer.splice(vm.chipContainer.length - 1, 1);
					vm.dispatchChipContainerRemoveEvent(id);
				};

				var randomIndex = function getRandomInt (min, max)
				{
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min + 1)) + min;
				};

				var getCurrentSelectedIndex = function ()
				{
					var index = findWithAttr(vm.chipContainer, "selected", true);
					return index !== -1 ? index : false;
				};

				var findWithAttr = function (array, attr, value)
				{
					for (var i = 0; i < array.length; i += 1)
					{
						if (array[i][attr] === value)
						{
							return i;
						}
					}
					return -1;
				};

				String.prototype.turkishLowerCase = function ()
				{
					return this.replace(/Ğ/g, "ğ")
						.replace(/Ü/g, "ü")
						.replace(/Ş/g, "ş")
						.replace(/I/g, "ı")
						.replace(/İ/g, "i")
						.replace(/Ö/g, "ö")
						.replace(/Ç/g, "ç")
						.toLowerCase();
				}; 
		}
	}

	angular.module("chip.component",[]).component("chip",
	{
		templateUrl: "shared/chip/chip.html",
		controller: ["$scope", "$sce", ChipComponentController],
		transclude:
		{
			"icon": "?dropdownIcon",
			"label": "?chipLabel"
		},
		bindings:
		{
			chipContainer: "<",
			dropdownContainer: "=",
			dropdownIcon: "@?",
			placeholder: "<",
			onContainerChange: "<",
			canAddNewItem: "<"

		}
	});
})();