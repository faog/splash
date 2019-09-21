import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from './ImageGridRedux/actions';
import Button from '../Button';
import './styles.scss';

class ImageGrid extends Component {
	//Función de React que carga las imagenes al acceder a la página
	componentDidMount(){
		this.props.loadImages();
	}

	render() {
		const { images, error, isLoading, loadImages} = this.props;
		return (
			<div className = "content">
				<section className = "content-grid">
					{ images.map(image => (
						<div
						key={image.id}
						className={`content-grid__item item-${Math.ceil(
							image.height / image.width,
							)}`}>
								<img src={image.urls.small} alt={image.user.username}></img>
						</div>
					))}
				</section>
				{error && <div className="error">{JSON.stringify(error)}</div>}
				<Button 
					onClick={()=> !isLoading && loadImages()}
					loading={isLoading}
				>
					Cargar más
				</Button>
			</div>
		) 
	}
}

const mapStateToProps =({ isLoading, images, error })=>({
  isLoading,
  images, 
  error,
});

const mapDispatchToProps = dispatch => ({
	loadImages: () => dispatch(loadImages()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(ImageGrid);