new Vue({
	el: '#login',
	data: {
		credentials: {
			username: '',
			password: ''	
		},
		events: []
	
	},
	ready: function(){
		this.fetchCredentials();
	},
	methods: {
		fetchCredentials: function(){
			var credentials = [
				{
					id: 1,
					username: 'Matt Herron',
					password: 'password123'
				},
				{
					id: 2,
					username: 'Chris Hastings',
					password: 'password234'
				},
				{
					id: 3,
					username: 'Noe Huerta',
					password: 'password345'
				}
			];
			this.$set('events', events);
		},

		authenticate: function(){
			if(this.credential.username){
				this.credentials.push(this.event);
				this.credential = {
					usenname: '',
					password: ''
				}
			}
		}
	}
});
