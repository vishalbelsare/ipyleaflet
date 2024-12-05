// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { CircleMarker } from 'leaflet';
import L from '../leaflet';
import { LeafletPathModel, LeafletPathView } from './Path';

const DEFAULT_LOCATION = [0.0, 0.0];

export class LeafletCircleMarkerModel extends LeafletPathModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletCircleMarkerView',
      _model_name: 'LeafletCircleMarkerModel',
      location: DEFAULT_LOCATION,
    };
  }
}

export class LeafletCircleMarkerView extends LeafletPathView {
  obj: CircleMarker;

  create_obj() {
    this.obj = L.circleMarker(
      this.model.get('location'),
      this.get_options() as L.CircleMarkerOptions
    );
  }

  model_events() {
    super.model_events();
    this.listenTo(this.model, 'change:location', () => {
      this.obj.setLatLng(this.model.get('location'));
    });
  }
}
