const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM medico',(err, medico)=>{
            if(err){
                return res.status(404).send({status: 'error',message: 'No se encontro el contenido'});
            }else{
                return res.status(200).send({status: 'success',medico});
            }
        });
    });
};

controller.save = (req,res)=>{
    const body = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO medico set ?',body,(err, medico)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se creo el contenido'});
            }else{
                return res.status(200).send({status: 'success',medico});
            }
        });
    });
};

controller.delete = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM medico WHERE id = ?',id,(err, medico)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se borro el contenido'});
            }else{
                return res.status(200).send({status: 'success',medico});
            }
        });
    });
};

controller.edit = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM medico WHERE id = ?',id,(err, medico)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se encontro contenido'});
            }else{
                return res.status(200).send({status: 'success',medico});
            }
        });
    });
};

controller.update = (req, res)=>{
    const id = req.params.id;
    const newBody = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE medico set ? WHERE id = ?',[newBody,id],(err, medico)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se actualizo contenido'});
            }else{
                return res.status(200).send({status: 'success',medico});
            }
        });
    });
};

module.exports = controller;