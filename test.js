import test from 'ava';
import translitterify from './index';

test('translitter Ronaldo Luís Nazário de Lima', t => {
  t.is(translitterify('Ronaldo Luís Nazário de Lima'), 'Ronaldo Luis Nazario de Lima');
});

test('full translitteration', t => {
  t.is(translitterify(
    'àáâãäåăąÀÁÂÃÄÅĂĄćčçĆČÇďđĎĐèéêëëěęÈÉÊËĚĘğĞi̇ìíîïİÌÍÎÏĺľłĹĽŁñňńÑŇŃòóôõöøőÒÓÔÕÖØřŕŘŔšşśŠŞŚťťţŤŤŢùúûüůÙÚÛÜŮÿýŸÝžźżŽŹŻ'),
    'aaaaaaaaAAAAAAAAcccCCCddDDeeeeeeeEEEEEEgGiiiiiIIIIIlllLLLnnnNNNoooooooOOOOOOrrRRsssSSStttTTTuuuuuUUUUUyyYYzzzZZZ');
});
