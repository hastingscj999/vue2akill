new Vue({
	el: '#login',
	data: {
		credential: {
			username: '',
			password: ''	
		},
		credentials: []
	
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
			this.$set('credentials', credentials);
		},

		authenticate: function(){
			if(this.credential.username){
				this.credentials.push(this.credential);
				this.credential = {
					username: '',
					password: ''
				}
			}
		}
	}
});
