// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Rectangle } from 'leaflet';
import L from '../leaflet';
import { LeafletPolygonModel, LeafletPolygonView } from './Polygon';

export class LeafletRectangleModel extends LeafletPolygonModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletRectangleView',
      _model_name: 'LeafletRectangleModel',
      bounds: [],
    };
  }
}

export class LeafletRectangleView extends LeafletPolygonView {
  obj: Rectangle;

  create_obj() {
    this.obj = L.rectangle(this.model.get('bounds'), this.get_options());
  }
}
