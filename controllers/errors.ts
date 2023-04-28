export const customErrors = (err: any, req: any, res: any, next: any) => {
    res.status(err.status).send({msg: err.msg})
}