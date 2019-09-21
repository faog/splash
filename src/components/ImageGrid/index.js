import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from './ImageGridRedux/actions';
import Button from '../Button';
import Stats from '../Stats';
import './styles.scss';

class ImageGrid extends Component {
	//Función de React que carga las imagenes al acceder a la página
	componentDidMount(){
		this.props.loadImages();
	}

	render() {
		const { images, error, isLoading, loadImages, imageStats} = this.props;
		return (
			<div className = "content">
				<section className = "content-grid">
					{ images.map(image => (
						<div
						key={image.id}
						className={`content-grid__item item-${Math.ceil(
							image.height / image.width,
							)}`}>
							<Stats stats={imageStats[image.id]}/>
							<img 
								src={image.urls.small} 
								alt={image.user.username}
							/>
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

const mapStateToProps =({ isLoading, images, error, imageStats })=>({
  isLoading,
  images, 
	error,
	imageStats,
});

const mapDispatchToProps = dispatch => ({
	loadImages: () => dispatch(loadImages()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(ImageGrid);
