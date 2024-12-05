// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { FeatureGroup } from 'leaflet';
import L from '../leaflet';
import { LeafletLayerGroupModel, LeafletLayerGroupView } from './LayerGroup';

export class LeafletFeatureGroupModel extends LeafletLayerGroupModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletFeatureGroupView',
      _model_name: 'LeafletFeatureGroupModel',
    };
  }
}

export class LeafletFeatureGroupView extends LeafletLayerGroupView {
  obj: FeatureGroup;

  create_obj() {
    this.obj = L.featureGroup();
  }
}
