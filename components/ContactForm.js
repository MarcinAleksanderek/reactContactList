var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			<form className= {'contactForm'}>
				<input type="text" name="name" placeholder="Imię" className= {'Input-text'} value={this.props.contact.firstName}/>
				<input type="text" name="nazwisko" placeholder="Nazwisko" className= {'Input-text'} value={this.props.contact.lastname}/>
				<input type="email" name="email" placeholder="Email" className= {'Input-text'} value={this.props.contact.email}/>
				<button type="submit" value="Submit" className= {'button'}>Dodaj kontakt</button>
			</form>
		)
	},
});