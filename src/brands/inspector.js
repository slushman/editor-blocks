/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, RangeControl } = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes
		} = this.props;

		const { count, columns } = attributes;

		return (
			<InspectorControls key="inspector">
				<PanelBody initialOpen={ true } title={ __( 'Brands Settings' ) }>
					<RangeControl
						label={ __( 'Brands' ) }
						value={ count }
						onChange={ ( count ) => setAttributes( { count } ) }
						min={ 2 }
		        max={ 6 }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
