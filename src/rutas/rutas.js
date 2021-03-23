const { Router } = require('express');
const router = Router();

//const express = require(express);
//const express = express.Router();

//rutas
const reportes = require('./reportes.json');
console.log(reportes);

router.get('/', (req,res) => {
    res.json(reportes);
})

router.get('/:fecha', (req,res) => {
    const {fecha}= req.params;
    reportes.forEach(reporte => {
        if(reporte.fecha == fecha){ 
        res.json(reporte);
        }
    });
});

router.get('/:fecha/impresiones/', (req,res) => {
    const {fecha}= req.params;
    reportes.forEach(reporte => {
        if(reporte.fecha == fecha){
        res.json(reporte.impresiones);
        }
    });
});

router.get('/:fecha/clickIndividuales/', (req,res) => {
    const {fecha}= req.params;
    reportes.forEach(reporte => {
        if(reporte.fecha == fecha){
        res.json(reporte.clickIndividuales);
        }
    });
});

router.get('/:fecha/tiempoNavegacion/', (req,res) => {
    const {fecha}= req.params;
    reportes.forEach(reporte => {
        if(reporte.fecha == fecha){
        res.json(reporte.tiempoNavegacion);
        }
    });
});

router.get('/:fecha/procesosCompletos/', (req,res) => {
    const {fecha}= req.params;
    reportes.forEach(reporte => {
        if(reporte.fecha == fecha){
        res.json(reporte.procesosCompletos);
        }
    });
});

router.get('/:fecha/Conversiones/', (req,res) => {
    const {fecha}= req.params;
    reportes.forEach(reporte => {
        if(reporte.fecha == fecha){
        res.json(reporte.Conversiones);
        }
    });
});

router.get('/:fecha/SalidaDeSitio/', (req,res) => {
    const {fecha}= req.params;
    reportes.forEach(reporte => {
        if(reporte.fecha == fecha){
        res.json(reporte.SalidaDeSitio);
        }
    });
});
module.exports = router;