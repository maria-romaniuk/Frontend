import React, { Component } from 'react';
import Photo from "./Photo";

export interface IPhotoJson{
    id: number,
    title: string,
    thumbnailUrl: string
}

interface PhotoListState {
    photos: IPhotoJson[];
    isLoading: boolean;
  }
export class PhotoList extends Component<Record<string, never>, PhotoListState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
          photos: [],
          isLoading: false,
        };
      }
    
      componentDidMount() {
        this.setState({ ...this.state, isLoading: true });
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ photos: data, isLoading: false });
          });

        }
          render() {
            const { photos, isLoading } = this.state;
        
            return isLoading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              // <div>Loading...</div>
            ) : (
              <div className="d-flex flex-wrap justify-content-between">
                {photos.slice(0,12).map((photo) => (
                  <Photo key={photo.id} photo={photo} />
                  // <p key={user.id}>{user.name}</p>
                ))}
              </div>
            );
          }
        }
export default PhotoList