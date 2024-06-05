import { Component } from 'react';
import { IPhotoJson } from './PhotoList';

export class Photo extends Component<{ photo: IPhotoJson }> {
    render() {
        const { title, thumbnailUrl } = this.props.photo;
        return (
            <div className='photoItem  w-50 d-flex flex-column' style={{marginBottom:'10px', border:'1px solid #eee'}}>
                <img src={thumbnailUrl} alt={title} />
                <span className='text-center'>{title}</span>
            </div>
        )
    }
}

export default Photo