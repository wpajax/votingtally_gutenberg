import axios from "axios";
const { Component, Fragment } = wp.element;
const { __, _x } = wp.i18n;

const {
	PanelBody,
	Placeholder,
	Toolbar,
	Spinner,
} = wp.components;

class Popular_Posts extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			loading: true,
			html: '',
		};
	}
	componentDidMount = () => {
		axios.get(
			votingtally_admin.rest_url + `votingtally/v1/get_posts/post/10/DESC`,
			{
				'headers': { 'X-WP-Nonce': votingtally_admin.nonce }
			}
		).then( ( response ) => {
			this.setState(
				{
					loading: false,
					html: this.getListHtml( response.data ),
				}
			)
		} );
	}
	getListHtml = (data) => {
		const listItems = data.map( ( item ) =>
			<li key={item.id}>
				{item.title}
			</li>
		);
		return (
			<ul>{listItems}</ul>
		);
	}
	render() {
		const { setAttributes } = this.props;
		const { align } = this.props.attributes;

		return (
			<Fragment>
			{ this.state.loading && 
				<Fragment>
					<Placeholder
						icon="admin-post"
						label={ __( 'Popular Posts',  'votingtally' ) }
					>
						<Spinner />
					</Placeholder>
				</Fragment>
			}
			{ ! this.state.loading &&
				<Fragment>
					{this.state.html}
				</Fragment>
			}
			</Fragment>
			
		)
	}
}
export default Popular_Posts;
