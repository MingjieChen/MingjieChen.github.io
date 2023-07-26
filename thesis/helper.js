function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    let cell = table_row.cells[col_offset + i];
    console.log(table_row.cells.length)
    
    cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    
  }
}


function exp1_table(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_src.wav', '_trg.wav', '_vqwae.wav', '_wae.wav', '_inwae.wav', '_svqwae.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/exp1/' + i, ext, 0);
  }
}

function exp2_sess1_table(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_src.wav', '_trg.wav', '_starganvc.wav', '_starganvc2.wav', '_waganvc.wav'];

  for (var i = 0; i < 6; i++) {
    generateExampleRow(table.rows[1 + i], 'data/exp2/sess1/' + i, ext, 2);
  }
}
function exp2_sess2_table(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_src.wav', '_trg.wav', '_starganvc.wav', '_starganvc2.wav', '_waganvc.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/exp2/sess2/' + i, ext, 2);
  }
}

function exp3_sess1_table(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_src.wav', '_trg.wav', '_sys1.wav', '_sys2.wav', '_sys3.wav', '_sys4.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/exp3/sess1/' + i, ext, 0);
  }
}
function exp3_sess2_table(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_src.wav', '_trg.wav', '_sys1.wav', '_sys2.wav', '_sys3.wav', '_sys4.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/exp3/sess2/' + i, ext, 0);
  }
}
function exp3_sess3_table(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_src.wav', '_trg.wav', '_sys1.wav', '_sys2.wav', '_sys3.wav', '_sys4.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/exp3/sess3/' + i, ext, 0);
  }
}



exp1_table('exp1-table')
exp2_sess1_table('exp2-sess1-table')
exp2_sess2_table('exp2-sess2-table')
exp3_sess1_table('exp3-sess1-table')
exp3_sess2_table('exp3-sess2-table')
exp3_sess3_table('exp3-sess3-table')

