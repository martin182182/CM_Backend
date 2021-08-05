const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM empleado',(err, empleado)=>{
            if(err){
                return res.status(404).send({status: 'error',message: 'No se encontro el contenido'});
            }else{
                return res.status(200).send({status: 'success',empleado});
            }
        });
    });
};

controller.save = (req,res)=>{
    const body = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO empleado set ?',body,(err, empleado)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se creo el contenido'});
            }else{
                return res.status(200).send({status: 'success',empleado});
            }
        });
    });
};

controller.delete = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM empleado WHERE id = ?',id,(err, empleado)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se borro el contenido'});
            }else{
                return res.status(200).send({status: 'success',empleado});
            }
        });
    });
};

controller.edit = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM empleado WHERE id = ?',id,(err, empleado)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se encontro contenido'});
            }else{
                return res.status(200).send({status: 'success',empleado});
            }
        });
    });
};

controller.update = (req, res)=>{
    const id = req.params.id;
    const newBody = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE empleado set ? WHERE id = ?',[newBody,id],(err, empleado)=>{
            if(err){
                console.log(err);
                return res.status(404).send({status: 'error',message: 'No se actualizo contenido'});
            }else{
                return res.status(200).send({status: 'success',empleado});
            }
        });
    });
};

module.exports = controller;