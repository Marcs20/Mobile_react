import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity} from "react-native";
import { openDatabase } from "react-native-sqlite-storage";
 

const db = openDatabase({
  name: "rn_sqlite_Tarefas",
});
 
 
const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
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
 
  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }

 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa, quantidade],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };

  
 
  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const deleteTarefa = item => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [item],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa removida com sucesso!`);
          setTarefas('');
          getTarefas();
        },
        error => {
          console.log("Erro ao deletar uma Tarefa " + error.message);
        },
      );
    });
  }
 
  const renderTarefa = ({ item }) => {
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
        <TouchableOpacity onPress={() => deleteTarefa(item.id)}>
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
    await getTarefas();
  }, []);
 
  return (
    <View>
      <Text style={{
          color: '#000',
          textAlign: 'center',
          fontSize: 30
          }}>Tarefas</Text>
      <View style={{flexDirection: 'row',
      alignItems: 'center'
      }}>
      
      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{width: 350,
          height: 40,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
          marginLeft: 10
          }}
        />

        <TouchableOpacity onPress={incluirTarefa}>
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
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
      />

      </View>
      
    
    </View>
  ) 
}
export default App;
