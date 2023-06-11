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
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}


function generateVoiceConversion(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_src.wav', '_trg.wav', '_libritts_vqwav2vec_uttdvec_ppgvcf0_fs2_ppgvchifigan.wav', '_libritts_vqwav2vec_uttdvec_ppgvcf0_tacoar_ppgvchifigan.wav', '_libritts_vqwav2vec_uttdvec_ppgvcf0_tacomol_ppgvchifigan.wav', '_libritts_conformerppg_uttdvec_ppgvcf0_fs2_ppgvchifigan.wav', '_libritts_conformerppg_uttdvec_ppgvcf0_tacoar_ppgvchifigan.wav', '_libritts_conformerppg_uttdvec_ppgvcf0_tacomol_ppgvchifigan.wav'];

  for (var i = 0; i < 6; i++) {
    generateExampleRow(table.rows[1 + i], 'samples/' + i, ext, 0);
  }
}




generateVoiceConversion('voice-conversion-exp-table')
