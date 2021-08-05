const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM especialidad',(err, especialidad)=>{
            if(err){
                return res.status(404).send({status: 'error',message: 'No se encontro el contenido'});
            }else{
                return res.status(200).send({status: 'success',especialidad});
            }
        });
    });
};

controller.save = (req,res)=>{
    const body = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO especialidad set ?',body,(err, especialidad)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se creo el contenido'});
            }else{
                return res.status(200).send({status: 'success',especialidad});
            }
        });
    });
};

controller.delete = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM especialidad WHERE id = ?',id,(err, especialidad)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se borro el contenido'});
            }else{
                return res.status(200).send({status: 'success',especialidad});
            }
        });
    });
};

controller.edit = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM especialidad WHERE id = ?',id,(err, especialidad)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se encontro contenido'});
            }else{
                return res.status(200).send({status: 'success',especialidad});
            }
        });
    });
};

controller.update = (req, res)=>{
    const id = req.params.id;
    const newBody = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE especialidad set ? WHERE id = ?',[newBody,id],(err, especialidad)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se actualizo contenido'});
            }else{
                return res.status(200).send({status: 'success',especialidad});
            }
        });
    });
};

module.exports = controller;