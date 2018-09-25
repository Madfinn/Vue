var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!',
        message2: 'You download this page: ' + new Date().toLocaleString(),
        seen: true,
        todos: [
            {item: 'Task 1'},
            {item: 'Task 2'},
            {item: 'Task 3'},
            {item: 'Task 4'}
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

Vue.component('todo-item', {
    template: '<li>Hello</li>'
})

