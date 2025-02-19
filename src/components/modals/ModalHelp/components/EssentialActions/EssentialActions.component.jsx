import './EssentialActions.styles.styl';

import {
  Angle,
  Drag,
  Edit,
  RButton,
  Scroll,
  View,
  ZoomIn,
  ZoomOut
} from './icons.jsx';
import React, { Component } from 'react';

const actions = [
  {
    title: 'Move the map by dragging',
    description:
      'Click and drag to pan the map view.',
    items: [[Angle, Drag]]
  },
  {
    title: 'Zoom the map by scrolling',
    description: 'Use the mouse scrollwheel (or touchpad scrolling motion) to zoom in and out.',
    items: [[Scroll, 'or', ZoomOut, ZoomIn]]
  },
  {
    title: 'Rotate the map by right-clicking and dragging',
    description: 'Right-click and drag to rotate the map while staying in place.',
    items: [[RButton, Drag]]
  },
  {
    title: 'Mode switch',
    description:
      'To switch between the "View" and "Edit" modes, click the button in the upper right corner.',
    items: [[View, Edit]]
  }
];

/**
 * EssentialActions component.
 * Exclusively for the HelpModal component as an 'Essential Actions' tab content.
 *
 * @author Oleksii Medvediev
 * @category Components.
 */
class EssentialActions extends Component {
  render() {
    return (
      <div className="essentialActionsWrapper">
        {actions.map(({ title, description, items }) => (
          <div className="action" key={title}>
            <div className="text">
              <h3 className="actionTitle">{title}</h3>
              <p className="actionDescription">{description}</p>
            </div>
            <div className="icons">
              {items.map((row, index) => (
                <div className="itemsRow" key={title.concat(index.toString())}>
                  {row.map((item, index) => (
                    <span className="item" key={index.toString()}>
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export { EssentialActions };
