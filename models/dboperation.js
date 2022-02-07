const config = require('./dbconfig');
const sql = require('mssql')

async function getMembers(){
  try{
    let pool = await sql.connect(config);
    let members = await pool.request().query("select * from member");
    return members.recordsets;
  }catch(err){
    console.log(err);
  }
}

async function getMember(memberId){
  try{
    let pool = await sql.connect(config);
    let member = await pool.request()
            .input('input_parameter',sql.VarChar, memberId)
            .query("select * from member where member_id = @input_parameter");
    return member.recordsets;
  }catch(err){
    console.log(err);
  }
}

async function addMember(member){
  try{
    let pool = await sql.connect(config);
    let insertMember = await pool.request()
            .input('member_id',sql.VarChar, member.member_id)
            .input('member_name',sql.VarChar, member.member_name)
            .input('valid_date_from',sql.Date, member.valid_date_from)
            .input('valid_date_to',sql.Date, member.valid_date_to)
            .query("insert into member(member_id,member_name,valid_date_from,valid_date_to) values(@member_id,@member_name,@valid_date_from,@valid_date_to)");
    return insertMember.recordsets;
  }catch(err){
    console.log(err);
  }
}
async function editMember(member){
  try{
    let pool = await sql.connect(config);
    let updateMember = await pool.request()
            .input('member_id',sql.VarChar, member.member_id)
            .input('member_name',sql.VarChar, member.member_name)
            .input('valid_date_from',sql.Date, member.valid_date_from)
            .input('valid_date_to',sql.Date, member.valid_date_to)
            .query("update member set member_name = @member_name, valid_date_from = @valid_date_from, valid_date_to = @valid_date_to  where member_id = @member_id");
    return updateMember.recordsets;
  }catch(err){
    console.log(err);
  }
}
async function deleteMember(member){
  try{
    let pool = await sql.connect(config);
    let deleteMember = await pool.request()
            .input('member_id',sql.VarChar, member.member_id)
            .query("delete from member where member_id = @member_id");
    return deleteMember.recordsets;
  }catch(err){
    console.log(err);
  }
}
module.exports = {
  getMembers,getMember,addMember,editMember,deleteMember};