import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

/*
    Check that the container has the correct class name
    correct number of Images are rendered
    each Image has the correct props set.
*/

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery component', function() {
    it('Renders a series of images and their descriptions',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery url={props.url} description={props.description} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');

        const img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});