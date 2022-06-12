import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity} from "react-native";
import { openDatabase } from "react-native-sqlite-storage";
 

const db = openDatabase({
  name: "rn_sqlite_Compras",
});
 
 
const App = () => {
  const [compra, setCompra] = useState("");
  const [quantidadee, setQuantidadee] = useState("");
  const [compras, setCompras] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), quantidade INTEGER)`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
 
  const incluirCompra = () => {
    if (!compra) {
      alert("Nome da Compra");
      return false;
    }

    if (!quantidadee) {
      alert("Informe a quantidade");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (nome,quantidade) VALUES (?,?)`,
        [compra, quantidadee],
        (sqlTxn, res) => {
          console.log(`${compra} Compras adicionada com sucesso!`);
          getCompras();
          setCompra("");
          setQuantidadee("");
        },
        error => {
          console.log("Erro ao inserir uma Compra " + error.message);
        },
      );
    });
  };

  
 
  const getCompras = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id`,
        [],
        (sqlTxn, res) => {
          console.log("Compras lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, quantidade: item.quantidade});
            }
 
            setCompras(results);
          }
        },
        error => {
          console.log("Erro ao obter Compras " + error.message);
        },
      );
    });
  };

  const deleteCompra = item => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM compras WHERE id = ?`,
        [item],
        (sqlTxn, res) => {
          console.log(`${compra} Compra removida com sucesso!`);
          setCompras('');
          getCompras();
        },
        error => {
          console.log("Erro ao deletar uma Compra " + error.message);
        },
      );
    });
  }
 
  const renderCompra = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome}</Text>
        <Text>({item.quantidade})</Text>
        <TouchableOpacity onPress={() => deleteCompra(item.id)}>
          <Text style={{backgroundColor: '#222', 
          color: '#FFF',
          height: 40,
          padding: 10,
          marginLeft: 15
          }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  };
 
  useEffect(async () => {
    await createTables();
    await getCompras();
  }, []);
 
  return (
    <View>
      <Text style={{
          color: '#000',
          textAlign: 'center',
          fontSize: 30
          }}>Compras</Text>
      <View style={{flexDirection: 'row',
      alignItems: 'center'
      }}>
      
      <TextInput
        placeholder="Informe uma Compra"
        value={compra}
        onChangeText={setCompra}
        style={{width: 250,
          height: 40,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
          marginLeft: 10
          }}
        />

    <TextInput
        placeholder="QTD"
        value={quantidadee}
        onChangeText={setQuantidadee}
        style={{width: 50,
          height: 40,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
          marginLeft: 10
          }}
        />

      

        <TouchableOpacity onPress={incluirCompra}>
          <Text style={{backgroundColor: '#222', 
          color: '#FFF',
          height: 40,
          padding: 10,
          marginLeft: 4,
          }}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',
      alignItems: 'center'
      }}><FlatList
        data={compras}
        renderItem={renderCompra}
        key={t => t.id}
      />

      </View>
      
    
    </View>
  ) 
}
export default App;