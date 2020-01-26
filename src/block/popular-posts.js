const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import edit from './popular-posts-edit';

registerBlockType( 'votingtally/popular-posts', {
	title: __( 'Popular Posts', 'votingtally' ), // Block title.
	icon: <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C7.89543 2 7 2.89543 7 4V5H6C4.89543 5 4 5.89543 4 7V20C4 21.1046 4.89543 22 6 22H15C16.1046 22 17 21.1046 17 20V19H18C19.1046 19 20 18.1046 20 17V4C20 2.89543 19.1046 2 18 2H9ZM17 7V17.8H17.8C18.3523 17.8 18.8 17.3523 18.8 16.8V4.2C18.8 3.64772 18.3523 3.2 17.8 3.2H9.2C8.64772 3.2 8.2 3.64771 8.2 4.2V5H15C16.1046 5 17 5.89543 17 7ZM6.2 6.2C5.64772 6.2 5.2 6.64771 5.2 7.2V19.8C5.2 20.3523 5.64771 20.8 6.2 20.8H14.8C15.3523 20.8 15.8 20.3523 15.8 19.8V7.2C15.8 6.64772 15.3523 6.2 14.8 6.2H6.2Z" fill="#000000"></path></svg>,
	category: 'widgets',
	keywords: [
		__( 'popular', 'votingtally' ),
		__( 'posts', 'votingtally' ),
		__( 'voting', 'votingtally' ),
	],
	supports: {
		align: true
	},
	edit: edit,
	save() { return null }
} );