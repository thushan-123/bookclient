import React from 'react'
import {useParams} from 'react-router-dom';

export default function Call() {
    let {search} = useParams();
    console.log(useParams());
  return (
    <div>Call</div>
  )
}
