var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			<form className= {'contactForm'}>
				<input type="text" name="name" placeholder="Imię" className= {'Input-text'}/>
				<input type="text" name="nazwisko" placeholder="Nazwisko" className= {'Input-text'}/>
				<input type="email" name="email" placeholder="Email" className= {'Input-text'}/>
				<button type="submit" value="Submit" className= {'button'}>Dodaj kontakt</button>
			</form>
		)
	},
})