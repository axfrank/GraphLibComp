/**
 * Created by Franzi on 19.06.2017.
 */
(function () {
    "use strict";

    var canvas2 = $('#canvas2');
    var graph = new joint.dia.Graph();


    var paper = new joint.dia.Paper({
        el: canvas2,
        width: 1800,
        height: 1800,
        model: graph,
        defaultLink: new joint.dia.Link({
            attrs: {
                '.marker-target': {d: 'M 10 0 L 0 5 L 10 10 z'},
                text: 'label'
            }
        })
    });


    var items = 5;
    var pos = 50;
    var pos2 = 10;
    var rect;
    var l;
    var rectId =0;

    for (var i = 0; i < items; i++) {
        for (var j = 0; j < items; j++) {

            rectId++;

            rect = new joint.shapes.basic.Rect({

                id: 'rect'+rectId,
                position: {x: pos2, y: pos},
                size: {width: 100, height: 80},
                attrs: {
                    '.label': {text: 'Model'}

                }
            });

            graph.addCell([rect]);
            console.log(rect.id);

            if(j >=1 && j <= (items-1)) {
                 l = new joint.dia.Link({
                    source: {id: 'rect'+(rectId-1)},
                    target: {id: 'rect'+rectId},
                    attrs: {
                        '.connection': {stroke: 'black'}
                    },

                });
                graph.addCell(l);
            }
            pos2 =  pos2 + 150;
        }
        graph.addCell([rect]);
        pos2 = 10;
        pos = pos +150;
    }
}());
