const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM centro',(err, centro)=>{
            if(err){
                return res.status(404).send({status: 'error',message: 'No se encontro el contenido'});
            }else{
                return res.status(200).send({status: 'success',centro});
            }
        });
    });
};

controller.save = (req,res)=>{
    const body = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO centro set ?',body,(err, centro)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se creo el contenido'});
            }else{
                return res.status(200).send({status: 'success',centro});
            }
        });
    });
};

controller.delete = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM centro WHERE id = ?',id,(err, centro)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se borro el contenido'});
            }else{
                return res.status(200).send({status: 'success',centro});
            }
        });
    });
};

controller.edit = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM centro WHERE id = ?',id,(err, centro)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se encontro contenido'});
            }else{
                return res.status(200).send({status: 'success',centro});
            }
        });
    });
};

controller.update = (req, res)=>{
    const id = req.params.id;
    const newBody = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE centro set ? WHERE id = ?',[newBody,id],(err, centro)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se actualizo contenido'});
            }else{
                return res.status(200).send({status: 'success',centro});
            }
        });
    });
};

module.exports = controller;