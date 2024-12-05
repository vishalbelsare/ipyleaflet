// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { WidgetView } from '@jupyter-widgets/base';
import L from '../leaflet';
import { LeafletControlModel, LeafletControlView } from './Control';

export class LeafletAttributionControlModel extends LeafletControlModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletAttributionControlView',
      _model_name: 'LeafletAttributionControlModel',
    };
  }
}

export class LeafletAttributionControlView extends LeafletControlView {
  initialize(
    parameters: WidgetView.IInitializeParameters<LeafletControlModel>
  ) {
    super.initialize(parameters);
    this.map_view = this.options.map_view;
  }

  create_obj() {
    this.obj = L.control.attribution(this.get_options());
  }
}
