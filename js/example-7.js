new Vue({
    el: '#example1',

    data: {
		tasks: [
			'Go to the store',
			'Go to the bank',
			'Go to the doctor'
		]
    }
});

new Vue({
    el: '#example2',

    data: {
		tasks: [
			{body: 'Wake up', completed: true},
			{body: 'Wash teeth', completed: true},
			{body: 'Dress up', completed: true},
			{body: 'Go to work', completed: true},
			{body: 'Go back home', completed: false},
			{body: 'Go to sleep', completed: false}
		]
    },

	methods: {
		toggleCompleted: function (task) {
			task.completed = !task.completed;
		},
        isCompleted: function(task) {
            return task.completed;
        },
        isInProgress: function(task) {
            return !this.isCompleted(task);
        },
        deleteTask: function (task) {
            this.tasks.$remove(task);
        },
        clearCompleted: function () {
            this. list = this.tasks.filter(this.isInProgress);
        }
	},

    computed: {
        remaining: function () {
            return this.tasks.filter(this.isInProgress).length;
            
            // Long way to do the same thing above
//            var vm = this;
//            return vm.tasks.filter (function (task) { // loop trought the tasks
//                return vm.isInProgress(task); // return only the tasks that has not been completed
//            }).length;
        },
        completed: function () {
            return this.tasks.filter(this.isCompleted).length;

//            return this.tasks.filter (function (task) { // loop trought the tasks
//                return task.completed; // return only the tasks that has been completed
//            }).length;
        }
    }
});


Vue.component('my-visited-cities', {
	template: '#visited-cities-template',
	props: ['cities'],

	methods: {
		toggleVisited: function (city) {
			city.visited = !city.visited;
		},
        isVisited: function(city) {
            return city.visited;
        },
        notVisitd: function(city) {
            return !city.isVisited(city);
        }
	},

    computed: {
        remaining: function () {
            return this.cities.filter(this.notVisitd).length;
//            return this.cities.filter (function (city) { // loop trought the cities
//                return this.notVisitd(city); // return only the cities that has not been visited
//            }).length;
        },
        visited: function () {
            return this.cities.filter(this.isVisited).length;
        }
    }
});

new Vue({
    el: '#example3',

    data: {
		cities: [
            {name: 'Alessandria', visited: true},
            {name: 'Ancona', visited: true},
            {name: 'Aosta', visited: false},
            {name: 'Asti', visited: true},
            {name: 'Bari', visited: false},
            {name: 'Bergamo', visited: false},
            {name: 'Bologna', visited: true},
            {name: 'Brescia', visited: false},
            {name: 'Cagliari', visited: false},
            {name: 'Campobasso', visited: false},
            {name: 'Catania', visited: false},
            {name: 'Catanzaro', visited: true},
            {name: 'Como', visited: false},
            {name: 'Cosenza', visited: false},
            {name: 'Cuneo', visited: false},
            {name: 'Ferrara', visited: true},
            {name: 'Florence', visited: true},
            {name: 'Genoa', visited: false},
            {name: 'L Aquila', visited: false},
            {name: 'Lecce', visited: false},
            {name: 'Livorno', visited: false},
            {name: 'Lucca', visited: false},
            {name: 'Messina', visited: false},
            {name: 'Milan', visited: true},
            {name: 'Modena', visited: true},
            {name: 'Naples', visited: true},
            {name: 'Padova', visited: true},
            {name: 'Palermo', visited: true},
            {name: 'Parma', visited: true},
            {name: 'Perugia', visited: true},
            {name: 'Pisa', visited: true},
            {name: 'Pordenone', visited: true},
            {name: 'Potenza', visited: false},
            {name: 'Reggio di Calabria', visited: true},
            {name: 'Reggio nell Emilia', visited: true},
            {name: 'Rieti', visited: false},
            {name: 'Rome', visited: true},
            {name: 'Salerno', visited: true},
            {name: 'Sassari', visited: false},
            {name: 'Siena', visited: false},
            {name: 'Taranto', visited: true},
            {name: 'Trapani', visited: false},
            {name: 'Treviso', visited: true},
            {name: 'Turin', visited: true},
            {name: 'Udine', visited: false},
            {name: 'Urbino', visited: false},
            {name: 'Venice', visited: true},
            {name: 'Verona', visited: true},
            {name: 'Vibo Valentia', visited: true},
            {name: 'Vicenza', visited: true}
		]
    }
})