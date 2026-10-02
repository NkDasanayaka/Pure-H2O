new Vue({
    el: '#app',
    data: {
        new_feedback: '',
        feedbacks: []
    },
    methods: {
        add_feedback() {
            if (this.new_feedback.trim() !== '') {
                this.feedbacks.push(this.new_feedback);
                this.new_feedback = '';
            }
        },
        delete_feedback(index) {
            this.feedbacks.splice(index, 1);
        }
    }
});
